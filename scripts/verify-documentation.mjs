import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import assert from "node:assert/strict";
import vm from "node:vm";
import ts from "typescript";
import sharp from "sharp";
import { prepareDocumentation } from "./prepare-documentation.mjs";

const code = ts.transpileModule(
  await fs.readFile("content/documentation.ts", "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;
const context = { exports: {} };
vm.runInNewContext(code, context);
const input = Array.from({ length: 8 }, (_, i) => ({
  id: String(i),
  featured: i === 3,
}));
const ordered = context.exports.orderDocuments(input);
assert.equal(ordered[0].id, "3");
assert.equal(new Set(ordered.map((item) => item.id)).size, input.length);
assert.equal(ordered.slice(0, 6).length, 6);
assert.equal(input[0].id, "0", "Curation must not mutate project data");

const root = await fs.mkdtemp(path.join(os.tmpdir(), "rr-documentation-test-"));
try {
  const sourceFolder = path.join(root, "public/media/japanect");
  await fs.mkdir(sourceFolder, { recursive: true });
  const large = await sharp({
    create: { width: 2400, height: 1600, channels: 3, background: "#263b61" },
  })
    .png()
    .toBuffer();
  await fs.writeFile(path.join(sourceFolder, "large.png"), large);
  await sharp({
    create: { width: 240, height: 400, channels: 3, background: "#f2eee6" },
  })
    .webp()
    .toFile(path.join(sourceFolder, "small.webp"));
  await fs.writeFile(path.join(sourceFolder, ".hidden.png"), large);
  await fs.writeFile(path.join(sourceFolder, "notes.txt"), "not an image");
  await fs.writeFile(path.join(sourceFolder, "invalid.jpg"), "not an image");
  await fs.mkdir(path.join(sourceFolder, ".private"));
  await fs.writeFile(path.join(sourceFolder, ".private/ignored.png"), large);
  const manifest = await prepareDocumentation(root, ["japanect"]);
  assert.equal(Object.keys(manifest).length, 2);
  const preview = manifest["/media/japanect/large.png"];
  assert.equal(preview.width, 960);
  assert.equal(preview.height, 640);
  assert.equal(preview.srcSet.split(", ").length, 3);
  assert.deepEqual(
    await fs.readFile(path.join(sourceFolder, "large.png")),
    large,
    "Original must not be modified",
  );
  assert.equal(
    manifest["/media/japanect/small.webp"].width,
    240,
    "Small sources must not be upscaled",
  );
  assert.equal(
    manifest["/media/japanect/small.webp"].srcSet.split(", ").length,
    1,
  );
  await fs.unlink(path.join(sourceFolder, "large.png"));
  const next = await prepareDocumentation(root, ["japanect"]);
  assert.equal(next["/media/japanect/large.png"], undefined);
  await assert.rejects(
    fs.access(path.join(root, "public", preview.src)),
    "Obsolete previews must be removed",
  );
  const previewData = {
    src: "/preview.webp",
    srcSet: "",
    width: 1200,
    height: 800,
  };
  const discovery = {
    "/media/japanect/japanect10.webp": previewData,
    "/media/japanect/japanect2.webp": {
      ...previewData,
      width: 600,
      height: 900,
    },
    "/media/japanect/japanect1.webp": previewData,
    "/media/jup/japanect0.webp": previewData,
  };
  const project = {
    mediaFolder: "japanect",
    company: "Japanect",
    documentation: [],
  };
  const docs = context.exports.resolveDocumentation(project, discovery);
  assert.equal(docs.length, 3);
  assert.equal(docs[0].image, "/media/japanect/japanect1.webp");
  assert.equal(docs[1].image, "/media/japanect/japanect2.webp");
  assert.equal(docs[2].image, "/media/japanect/japanect10.webp");
  assert.equal(docs[1].orientation, "portrait");
  assert.equal(docs[0].fit, "contain");
  assert.equal(docs[0].caption.en, "");
  const customized = context.exports.resolveDocumentation(
    {
      ...project,
      documentationMeta: {
        "japanect2.webp": {
          title: { en: "Campaign", id: "Kampanye" },
          featured: true,
          fit: "cover",
        },
      },
    },
    discovery,
  );
  assert.equal(
    context.exports.orderDocuments(customized)[0].title.id,
    "Kampanye",
  );
  const merged = context.exports.resolveDocumentation(
    {
      ...project,
      documentation: [
        { ...docs[0], title: { en: "Existing title", id: "Judul lama" } },
      ],
    },
    discovery,
  );
  assert.equal(
    merged.length,
    3,
    "Existing metadata must not duplicate discovered images",
  );
  assert.equal(merged[0].title.en, "Existing title");
  assert.equal(context.exports.resolveDocumentation(project, {}).length, 0);
  assert.equal(
    context.exports.resolveDocumentation(
      { ...project, mediaFolder: "jup" },
      discovery,
    ).length,
    1,
  );
  console.log(
    "PASS: automatic discovery, natural ordering, metadata overrides, project isolation, hidden/invalid file exclusion, responsive previews, original preservation and removed-file cleanup.",
  );
} finally {
  const resolved = path.resolve(root);
  assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()));
  assert.ok(path.basename(resolved).startsWith("rr-documentation-test-"));
  await fs.rm(resolved, { recursive: true, force: true });
}
