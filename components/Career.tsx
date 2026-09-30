import type { Locale } from "@/content/types";
import { career } from "@/content/career";
import { text, localPath } from "@/content/copy";
export function Career({ locale }: { locale: Locale }) {
  const t = text(locale);
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">{t.experience}</p>
        <h2>
          {locale === "en"
            ? "A connected path to digital marketing."
            : "Perjalanan yang terhubung ke digital marketing."}
        </h2>
        <p>
          {locale === "en"
            ? "Tour operations taught me to think about the whole customer journey. Marketing, copy, data and web work gave me more ways to shape it."
            : "Operasional tur mengajarkan saya untuk melihat perjalanan pelanggan secara utuh. Pemasaran, penulisan teks, data, dan web memberi saya lebih banyak cara untuk membentuknya."}
        </p>
      </div>
      <div
        className="career-evolution"
        aria-label={
          locale === "en" ? "Career progression" : "Perkembangan karier"
        }
      >
        {(locale === "en"
          ? [
              "Tour operations",
              "Digital marketing",
              "Copy & data",
              "Performance",
              "SEO / SEM",
              "Web",
              "Brand leadership",
            ]
          : [
              "Operasional tur",
              "Digital marketing",
              "Teks & data",
              "Performa",
              "SEO / SEM",
              "Web",
              "Kepemimpinan brand",
            ]
        ).map((s, i) => (
          <span key={s}>
            <small>0{i + 1}</small>
            {s}
          </span>
        ))}
      </div>
      <ol className="career-timeline">
        {career.map((entry, i) => (
          <li key={entry.name + entry.role.en}>
            <div className="career-marker">
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {entry.period && <time>{entry.period}</time>}
            </div>
            <div className="career-company">
              <h3>{entry.name}</h3>
              <p>{entry.role[locale]}</p>
            </div>
            <div className="career-context">
              <span className="caption">{entry.tags[locale]}</span>
              <p>{entry.note[locale]}</p>
              {entry.slug && (
                <a
                  className="text-link"
                  href={localPath(locale, `/work/${entry.slug}/`)}
                >
                  {t.viewCase} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
