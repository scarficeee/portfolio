import type { Locale } from "@/content/types";
import { credentials } from "@/content/credentials";
import { projects } from "@/content/projects";
import { Career } from "./Career";
import { CapabilityMap } from "./CapabilityMap";
import { text, localPath } from "@/content/copy";
import { Site, CaseLink, Metrics } from "./Site";
import { Tools } from "./Tools";
import { PerformanceGraphic } from "./PerformanceGraphic";
import { Media } from "./Media";
export function Home({ locale }: { locale: Locale }) {
  const t = text(locale);
  return (
    <Site locale={locale}>
      <section className="intro section" id="intro">
        <div className="intro-top">
          <span>{t.role}</span>
          <span>{t.location}</span>
        </div>
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
            <a className="text-link" href="#work">
              {t.explore} ↓
            </a>
          </div>
          <figure className="cover-study">
            <img
              src="/cover-study.webp"
              alt=""
              width="540"
              height="360"
              decoding="async"
            />
            <figcaption>Growth, by design.</figcaption>
          </figure>
        </div>
      </section>
      <section className="profile section" id="profile">
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
        <figure className="portrait">
          <Media
            src="/media/profile/portrait.webp"
            alt={t.portraitAlt}
            fallback={t.portrait}
            portrait
          />
          <figcaption>{t.portraitLabel}</figcaption>
          <a
            className="portrait-impact"
            href={localPath(locale, "/work/japanect/#results")}
          >
            <span>{projects[0].company}</span>
            <div>
              {projects[0].metrics.slice(0, 2).map((m) => (
                <span key={m.label}>
                  <strong>{m.value}</strong>
                  <small>{t.metricLabels[m.label]}</small>
                </span>
              ))}
            </div>
            <span>{t.viewCase} ↗</span>
          </a>
        </figure>
      </section>
      <section className="impact section" id="impact">
        <div className="section-heading">
          <p className="eyebrow">{t.impact}</p>
          <h2>{t.impactIntro}</h2>
        </div>
        {projects
          .filter((p) => p.metrics.length)
          .map((p) => (
            <div className="impact-record" key={p.slug}>
              <div className="impact-company">
                <h3>{p.company}</h3>
                {p.period && <span>{p.period}</span>}
                <CaseLink project={p} locale={locale} />
              </div>
              <Metrics project={p} locale={locale} />
            </div>
          ))}
      </section>
      <section id="work" className="work">
        <div className="section section-heading">
          <p className="eyebrow">{t.work}</p>
          <h2>{t.workIntro}</h2>
        </div>
        {projects.map((p) => (
          <article
            key={p.slug}
            id={"work-" + p.slug}
            data-project={p.slug}
            className={"project-spread section project-" + p.slug}
          >
            <div className="project-top">
              <span className="project-number">{p.number}</span>
            </div>
            <h2>
              <a href={localPath(locale, `/work/${p.slug}/`)}>{p.company}</a>
            </h2>
            <div className="project-details">
              <div className="project-facts">
                {p.role && (
                  <p>
                    <span className="caption">{t.roleLabel}</span>
                    {p.role[locale]}
                  </p>
                )}
                <p>
                  <span className="caption">{t.industryLabel}</span>
                  {p.industry[locale]}
                  {p.type ? " / " + p.type : ""}
                </p>
                {p.period && (
                  <p>
                    <span className="caption">{t.period}</span>
                    {p.period}
                  </p>
                )}
              </div>
              <div className="project-summary">
                <p>{p.summary[locale]}</p>
                {p.metrics.length ? (
                  <PerformanceGraphic project={p} locale={locale} />
                ) : (
                  <div className="project-deliverables">
                    <span className="caption">{t.output}</span>
                    <ul>
                      {p.services.map((service) => (
                        <li key={service.en}>{service[locale]}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <CaseLink project={p} locale={locale} />
              </div>
            </div>
            {p.documentation.find((d) => d.featured && d.image) && (
              <a
                className="project-cover"
                href={localPath(locale, `/work/${p.slug}/#documentation`)}
              >
                <Media
                  src={
                    p.documentation.find((d) => d.featured && d.image)!.image!
                  }
                  alt={
                    p.documentation.find((d) => d.featured && d.image)!.alt[
                      locale
                    ]
                  }
                  fallback={t.prepared}
                />
              </a>
            )}
          </article>
        ))}
      </section>
      <section className="approach section" id="approach">
        <div className="section-heading">
          <p className="eyebrow">Growth, by design.</p>
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
      <section className="archive section" id="archive">
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
