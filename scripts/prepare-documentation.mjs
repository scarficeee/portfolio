import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import ts from "typescript";

// Release file handles between runs so replaced assets can be removed on Windows.
sharp.cache(false);

// Source files are untouched. Only generated previews live in this directory.
export async function prepareDocumentation(root = process.cwd(), mediaFolders) {
  if (!mediaFolders) {
    const source = await fs.readFile(
      path.join(root, "content/projects.ts"),
      "utf8",
    );
    const compiled = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext },
    }).outputText;
    const { projects } = await import(
      "data:text/javascript;base64," + Buffer.from(compiled).toString("base64")
    );
    mediaFolders = [...new Set([...projects.map((project) => project.mediaFolder), "certificates"] )];
  }
  const publicRoot = path.join(root, "public");
  const output = path.join(publicRoot, "media", "_previews");
  const manifest = {};
  const generated = new Set();
  await fs.mkdir(output, { recursive: true });
  for (const project of mediaFolders) {
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(project))
      throw new Error("Invalid project mediaFolder: " + project);
    const folder = path.join(publicRoot, "media", project);
    const walk = async (directory) => {
      for (const entry of await fs.readdir(directory, {
        withFileTypes: true,
      })) {
        if (entry.name.startsWith(".")) continue;
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) {
          await walk(file);
          continue;
        }
        if (!entry.isFile() || !/\.(webp|png|jpe?g|avif)$/i.test(entry.name))
          continue;
        const data = await fs.readFile(file);
        const hash = createHash("sha256")
          .update(data)
          .digest("hex")
          .slice(0, 16);
        let metadata;
        try {
          metadata = await sharp(data).metadata();
        } catch {
          console.warn(
            `Skipped unreadable documentation image: ${project}/${entry.name}`,
          );
          continue;
        }
        if ((metadata.pages || 1) > 1) continue;
        const candidates = [];
        for (const width of [480, 960, 1440]) {
          const name = `${hash}-${width}.webp`;
          generated.add(name);
          const target = path.join(output, name);
          try {
            await fs.access(target);
          } catch {
            await sharp(data)
              .rotate()
              .resize({ width, withoutEnlargement: true })
              .webp({ quality: 84 })
              .toFile(target);
          }
          const size = await sharp(target).metadata();
          if (!candidates.some((item) => item.width === size.width))
            candidates.push({
              src: `/media/_previews/${name}`,
              width: size.width,
              height: size.height,
            });
        }
        const standard =
          candidates.find((item) => item.width >= 960) || candidates.at(-1);
        const source =
          "/" +
          path
            .relative(publicRoot, file)
            .split(path.sep)
            .map(encodeURIComponent)
            .join("/");
        manifest[source] = {
          ...standard,
          srcSet: candidates
            .map((item) => `${item.src} ${item.width}w`)
            .join(", "),
        };
      }
    };
    try {
      await fs.access(folder);
    } catch {
      continue;
    }
    await walk(folder);
  }
  // Remove obsolete generated variants when an owner replaces or removes a source.
  for (const name of await fs.readdir(output)) {
    if (
      /^[a-f0-9]{16}-(480|960|1440)\.webp$/.test(name) &&
      !generated.has(name)
    )
      await fs.unlink(path.join(output, name));
  }
  await fs.mkdir(path.join(root, ".generated"), { recursive: true });
  const manifestPath = path.join(root, ".generated/documentation-media.json");
  const serialized = JSON.stringify(manifest, null, 2) + "\n";
  const previous = await fs.readFile(manifestPath, "utf8").catch(() => "");
  if (previous !== serialized) {
    // Readers always receive complete JSON during development refreshes.
    const pending = manifestPath + "." + process.pid + ".tmp";
    await fs.writeFile(pending, serialized);
    await fs.rename(pending, manifestPath);
  }
  console.log(
    `Documentation previews ready: ${Object.keys(manifest).length} source images.`,
  );
  return manifest;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await prepareDocumentation();
