import type { Locale } from "@/content/types";
import { credentials } from "@/content/credentials";
import { projects } from "@/content/projects";
import { Career } from "./Career";
import { CapabilityMap } from "./CapabilityMap";
import { text, localPath, periodLabel } from "@/content/copy";
import { Site, CaseLink } from "./Site";
import { ImpactGraphic } from "./ImpactGraphic";
import { Tools } from "./Tools";
import { WorkIndex } from "./WorkIndex";
import { SectionArt } from "./SectionArt";
import { Media } from "./Media";
import { Certificates } from "./Certificates";
export function Home({ locale }: { locale: Locale }) {
  const t = text(locale);
  return (
    <Site locale={locale}>
      <section className="intro section" id="intro">
        <SectionArt variant="hero" />
        <div className="intro-top">
          <span>{t.role}</span>
          <span>{t.location}</span>
        </div>
        <div className="intro-layout">
          <div className="intro-copy">
            <h1>
              <span>RIFALDY</span>
              <span>
                RIZQYA<span className="red-dot">.</span>
              </span>
            </h1>
            <div className="intro-bottom">
              <h2>
                Growth,
                <br />
                <em>by design.</em>
              </h2>
              <div>
                <p>{t.intro}</p>
                <p className="caption">{t.focus}</p>
                <div className="intro-actions">
                  <a className="intro-cta" href="#contact">
                    {t.projectCta}<span aria-hidden="true">↗</span>
                  </a>
                  <a className="text-link intro-secondary" href="#work">
                    {t.explore}<span aria-hidden="true"> ↓</span>
                  </a>
                </div>
                <a className="intro-hiring" href="/downloads/rifaldy-rizqya-cv.pdf" download>
                  {t.hiringCta}<span aria-hidden="true"> ↗</span>
                </a>
                <p className="intro-proof">{t.introProof}</p>
              </div>
            </div>
          </div>
          <figure className="intro-visual">
            <div className="intro-photo-frame">
              <Media
                src="/media/profile/portrait.webp"
                alt={t.portraitAlt}
                fallback={t.portrait}
                portrait
                eager
              />
            </div>
            <figcaption className="intro-visual-caption">
              <span>{locale === "en" ? "STRATEGY / CAMPAIGNS / WEB / DATA" : "STRATEGI / CAMPAIGN / WEB / DATA"}</span>
              <span>01 — 04</span>
            </figcaption>
            <a
              className="intro-featured-proof"
              href={localPath(locale, "/work/jaya-utama-perkasa/#case-comparison")}
            >
              <span className="eyebrow">{locale === "en" ? "FEATURED TRANSFORMATION · JUP" : "TRANSFORMASI UNGGULAN · JUP"}</span>
              <span className="intro-featured-period">{locale === "en" ? "2 years with my integrated strategy" : "2 tahun dengan strategi terintegrasi saya"}</span>
              <span className="intro-proof-metric"><strong>3.8M</strong><small>{locale === "en" ? "Views" : "Tayangan"}</small></span>
              <span className="intro-proof-metric"><strong>2.6M</strong><small>{locale === "en" ? "Reach" : "Jangkauan"}</small></span>
              <span className="intro-proof-link">{locale === "en" ? "Explore the case" : "Lihat studi kasus"} <span aria-hidden="true">↗</span></span>
            </a>
          </figure>
        </div>
      </section>
      <section className="profile section" id="profile">
        <SectionArt variant="profile" />
        <div className="profile-copy">
          <p className="eyebrow">{t.profileTitle}</p>
          <h2>{t.profileLead}</h2>
          <p>{t.profileBody}</p>
          <p>{t.profileMore}</p>
          <dl className="profile-index">
            <div>
              <dt>{t.profileFocus}</dt>
              <dd>Growth / Web / Search / Content / Analytics</dd>
            </div>
            <div>
              <dt>{t.profileAcross}</dt>
              <dd>{t.profileIndustries}</dd>
            </div>
          </dl>
          <blockquote>{t.quote}</blockquote>
        </div>
      </section>
      <section className="impact section" id="impact">
        <SectionArt variant="index" />
        <div className="section-heading">
          <p className="eyebrow">{t.impact}</p>
          <h2>{t.impactIntro}</h2>
        </div>
        {projects.filter((p) => p.slug === "jaya-utama-perkasa").map((p) => (
            <div className="impact-record" key={p.slug} data-project={p.slug}>
              <div className="impact-company">
                <h3>{p.company}</h3>
                {p.comparison && <span className="impact-featured-label">{locale === "en" ? "Featured transformation" : "Transformasi unggulan"}</span>}
                {p.period && <span>{periodLabel(p.period, locale)}</span>}
                <CaseLink project={p} locale={locale} />
              </div>
              <ImpactGraphic project={p} locale={locale} />
            </div>
          ))}
      </section>
      <WorkIndex locale={locale} />
      <section className="approach section" id="approach">
        <SectionArt variant="journey" />
        <div className="section-heading">
          <p className="eyebrow">Strategy &amp; execution.</p>
          <h2>{t.approach}</h2>
          <p>{t.approachIntro}</p>
        </div>
        <div className="practice-line">
          <span>{locale === "en" ? "PLAN IT" : "RENCANAKAN"}</span>
          <span>{locale === "en" ? "LAUNCH IT" : "JALANKAN"}</span>
          <span>{locale === "en" ? "BUILD IT" : "BANGUN"}</span>
          <span>{locale === "en" ? "PUBLISH IT" : "TERBITKAN"}</span>
          <span>{locale === "en" ? "MEASURE IT" : "UKUR"}</span>
          <span>{locale === "en" ? "IMPROVE IT" : "PERBAIKI"}</span>
        </div>
        <p className="journey-bridge">
          {locale === "en"
            ? "Plan the journey. Launch campaigns and publish content to earn attention. Build the experience. Measure the action. Improve with what you learn."
            : "Rencanakan perjalanannya. Jalankan campaign dan terbitkan konten untuk menarik perhatian. Bangun pengalaman. Ukur tindakannya. Perbaiki dari hasil yang dipelajari."}
        </p>
        <ol className="journey">
          {t.steps.map(([name, tools, note], i) => (
            <li key={name}>
              <span className="journey-number">0{i + 1}</span>
              <h3>{name}</h3>
              <p>{tools}</p>
              <small>{note}</small>
              <span className="journey-arrow" aria-hidden="true">
                ↓
              </span>
            </li>
          ))}
        </ol>
      </section>
      <Career locale={locale} />
      <CapabilityMap locale={locale} />
      <Tools locale={locale} />
      <Certificates locale={locale} />
      <section className="archive section" id="archive">
        <SectionArt variant="archive" />
        <div className="section-heading">
          <p className="eyebrow">{t.archive}</p>
          <h2>{t.archiveIntro}</h2>
        </div>
        <div className="archive-links">
          {projects.map((p) => (
            <a
              href={localPath(locale, `/work/${p.slug}/#documentation`)}
              key={p.slug}
            >
              <span>{p.company}</span>
              <span>{t.documentation} ↗</span>
            </a>
          ))}
        </div>
        <div className="credentials">
          <div>
            <h3>{t.education}</h3>
            <p>{t.school}</p>
          </div>
          <div>
            <h3>{t.languages}</h3>
            <p>{t.languageNames}</p>
          </div>
          {credentials.length > 0 && (
            <div>
              <h3>{t.credentials}</h3>
              {credentials.length ? (
                <ul>
                  {credentials.map((c) => (
                    <li key={c.title.en}>
                      {c.url ? (
                        <a href={c.url} target="_blank" rel="noreferrer">
                          {c.title[locale]} ↗
                        </a>
                      ) : (
                        c.title[locale]
                      )}
                      <small>
                        {c.issuer}
                        {c.year ? ` / ${c.year}` : ""}
                      </small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{t.credentialsEmpty}</p>
              )}
            </div>
          )}
        </div>
      </section>
    </Site>
  );
}
