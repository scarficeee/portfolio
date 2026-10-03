import type { Locale } from "@/content/types";
import { projects } from "@/content/projects";
import { text, localPath } from "@/content/copy";
import { SectionArt } from "./SectionArt";
import documentationPreviews from "@/.generated/documentation-media.json";
import {
  resolveDocumentation,
  type DocumentationPreviews,
} from "@/content/documentation";
import { WorkBrandMark } from "./WorkBrandMark";

const brandMarks: Record<string, string> = {
  japanect: "J",
  "jaya-utama-perkasa": "JUP",
  casadela: "CD",
  ladela: "L",
  "kurnia-group": "KG",
  japantrips: "JT",
  "adventure-travel-group": "ATG",
};

export function WorkIndex({ locale }: { locale: Locale }) {
  const t = text(locale);
  const previews = documentationPreviews as DocumentationPreviews;
  return (
    <section id="work" className="work work-index section">
      <SectionArt variant="index" />
      <div className="section-heading">
        <p className="eyebrow">{t.work}</p>
        <h2>{t.workIntro}</h2>
      </div>
      <div className="work-index-list">
        {projects.map((p) => {
          const cover = resolveDocumentation(p, previews).find((item) => item.featured && item.image)
            || resolveDocumentation(p, previews).find((item) => item.image);
          const image = cover?.image;
          const preview = image ? previews[image] : undefined;
          const resultHighlights = p.comparison
            ? p.comparison.metrics.slice(0, 3).map((metric) => ({ value: metric.afterDisplay[locale], label: metric.label[locale] }))
            : p.slug === "japantrips"
              ? [
                  { value: "+40%", label: t.metricLabels.engagement },
                  { value: "500", label: locale === "en" ? "Brand Boost leads" : "Leads Brand Boost" },
                  { value: "+25%", label: t.metricLabels.sales },
                ]
              : p.metrics.length
              ? p.metrics.slice(0, p.slug === "japantrips" ? 3 : 4).map((metric) => ({ value: metric.value, label: t.metricLabels[metric.label] }))
              : p.insights?.snapshots?.slice(0, 3).map((snapshot) => ({ value: snapshot.value, label: snapshot.label[locale] })) || [];
          const isChannelSnapshot = !p.comparison && !p.metrics.length && Boolean(p.insights?.snapshots?.length);
          const resultLabel = p.comparison
            ? p.comparison.afterLabel[locale]
            : p.metrics.length
              ? locale === "en" ? "Campaign outcomes" : "Hasil campaign"
              : isChannelSnapshot
                ? locale === "en" ? "Channel insights" : "Insight kanal"
                : locale === "en" ? "Project focus" : "Fokus proyek";
          return (
          <article
            key={p.slug}
            id={`work-${p.slug}`}
            data-project={p.slug}
            className="work-index-row"
          >
            <span className="work-index-number">{p.number}</span>
            <div className="work-index-identity">
              <div className="work-index-title">
                <WorkBrandMark slug={p.slug} fallback={brandMarks[p.slug] || p.company.slice(0, 2).toUpperCase()} />
                <h3>
                  <a href={localPath(locale, `/work/${p.slug}/`)}>{p.company}</a>
                </h3>
              </div>
              <p>{p.role?.[locale]}</p>
              <span>{p.index.capabilities[locale]}</span>
            </div>
            <div className="work-index-output">
              <div className="work-output-heading">
                <span><i aria-hidden="true" />{resultLabel}</span>
                {p.insights?.period && <small>{p.insights.period[locale]}</small>}
              </div>
              {resultHighlights.length > 0 ? (
                <div className={`work-output-stats${resultHighlights.length === 3 ? " has-three" : ""}${resultHighlights.length === 4 ? " has-four" : ""}`}>
                  {resultHighlights.map((highlight) => (
                    <div className="work-output-stat" key={`${highlight.label}-${highlight.value}`}>
                      <strong>{highlight.value}</strong>
                      <span>{highlight.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="work-output-focus">{p.index.output[locale]}</p>
              )}
            </div>
            <a
              className="work-index-image"
              data-fit={cover?.fit || "cover"}
              href={localPath(locale, `/work/${p.slug}/`)}
              tabIndex={image ? undefined : -1}
              aria-hidden={image ? undefined : true}
              aria-label={image ? `${t.viewCase}: ${p.company}` : undefined}
            >
              {image ? (
                <img
                  src={preview?.src || image}
                  srcSet={preview?.srcSet}
                  sizes="(max-width: 700px) 78vw, (max-width: 900px) 110px, 144px"
                  alt={cover?.alt[locale] || p.company}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span aria-hidden="true">RR</span>
              )}
              <i aria-hidden="true">↗</i>
            </a>
            <a
              className="text-link work-index-link"
              href={localPath(locale, `/work/${p.slug}/`)}
              aria-label={`${t.viewCase}: ${p.company}`}
            >
              {t.viewCase}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
          );
        })}
      </div>
    </section>
  );
}
