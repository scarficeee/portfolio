import type { Document, Localized, Project } from "./types";

// Keep a featured image first without dropping its supporting documents.
export function orderDocuments(items: Document[]) {
  return [
    ...items.filter((item) => item.featured),
    ...items.filter((item) => !item.featured),
  ];
}

export type DocumentationPreview = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

export type DocumentationPreviews = Record<string, DocumentationPreview>;

const localized = (
  value: Localized | string | undefined,
  fallback: Localized,
): Localized =>
  typeof value === "string" ? { en: value, id: value } : value || fallback;

// The generated manifest contains only decoded, valid images from public media.
// Existing curated records remain supported; new files need no content edits.
export function resolveDocumentation(
  project: Project,
  previews: DocumentationPreviews,
): Document[] {
  const prefix = `/media/${encodeURIComponent(project.mediaFolder)}/`;
  const collator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "base",
  });
  const sources = Object.keys(previews)
    .filter((src) => src.startsWith(prefix))
    .sort(
      (a, b) =>
        collator.compare(decodeURIComponent(a), decodeURIComponent(b)) ||
        a.localeCompare(b),
    );
  const available = new Set(sources);
  const used = new Set<string>();
  const curated = project.documentation.flatMap((item) => {
    const images = (
      item.images?.length ? item.images : item.image ? [item.image] : []
    ).filter((src) => available.has(src));
    if (!images.length) return [];
    images.forEach((src) => used.add(src));
    return [
      { ...item, image: images[0], images: item.images ? images : undefined },
    ];
  });
  const discovered = sources
    .filter((src) => !used.has(src))
    .map((image, index): Document => {
      const filename = decodeURIComponent(image.slice(prefix.length));
      const meta = project.documentationMeta?.[filename];
      const size = previews[image];
      const ratio = size.width / size.height;
      const orientation =
        meta?.orientation ||
        (ratio < 0.85 ? "portrait" : ratio < 1.15 ? "square" : "landscape");
      const number = String(index + 1).padStart(2, "0");
      return {
        id: `${project.mediaFolder}-file-${Array.from(filename)
          .map((character) => character.codePointAt(0)!.toString(16))
          .join("-")}`,
        image,
        alt: localized(meta?.alt, {
          en: `${project.company} — project documentation ${number}`,
          id: `${project.company} — dokumentasi proyek ${number}`,
        }),
        category: localized(meta?.category, {
          en: "Project archive",
          id: "Arsip proyek",
        }),
        title: localized(meta?.title, {
          en: `Selected material ${number}`,
          id: `Dokumentasi pilihan ${number}`,
        }),
        caption: localized(meta?.caption, { en: "", id: "" }),
        featured: meta?.featured,
        orientation,
        // Without content metadata, show the whole source. Do not guess whether it is a report or a photo.
        fit: meta?.fit || "contain",
      };
    });
  return [...curated, ...discovered];
}
