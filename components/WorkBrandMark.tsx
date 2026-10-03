import { existsSync } from "node:fs";
import { join } from "node:path";

const extensions = ["svg", "webp", "png"] as const;
const logoShapes: Record<string, "wide" | "casadela" | "square" | "seal"> = {
  japanect: "wide",
  "jaya-utama-perkasa": "seal",
  casadela: "casadela",
  ladela: "square",
  "kurnia-group": "wide",
  japantrips: "wide",
  "adventure-travel-group": "wide",
};

export function WorkBrandMark({ slug, fallback }: { slug: string; fallback: string }) {
  const displayPath = join(process.cwd(), "public", "media", "logos", "display", `${slug}.webp`);
  const hasDisplayLogo = existsSync(displayPath);
  const extension = extensions.find((format) =>
    existsSync(join(process.cwd(), "public", "media", "logos", `${slug}.${format}`)),
  );
  const src = hasDisplayLogo
    ? `/media/logos/display/${slug}.webp`
    : extension
      ? `/media/logos/${slug}.${extension}`
      : undefined;
  const shape = logoShapes[slug] || "square";

  return (
    <span className={`work-brand-mark is-${shape}${src ? " has-logo" : ""}`} aria-hidden="true">
      {src ? (
        <img src={src} alt="" />
      ) : (
        <span>{fallback}</span>
      )}
    </span>
  );
}
