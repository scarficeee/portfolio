import type { Locale } from "@/content/types";
import { credentials } from "@/content/credentials";
import { projects } from "@/content/projects";
import { experience } from "@/content/identity";
import { text, localPath } from "@/content/copy";
import { Site, CaseLink, Metrics } from "./Site";
import { Media } from "./Media";
export function Home({ locale }: { locale: Locale }) {
  const t = text(locale);
  return (
    <Site locale={locale}>
      <section className="intro section">
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
            <img src="/cover-study.png" alt="" width="1536" height="1024" />
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
            className={"project-spread section project-" + p.slug}
          >
            <div className="project-top">
              <span className="project-number">{p.number}</span>
              <span>
                {p.industry[locale]}
                {p.type ? " / " + p.type : ""}
              </span>
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
                {p.period && (
                  <p>
                    <span className="caption">{t.period}</span>
                    {p.period}
                  </p>
                )}
              </div>
              <div className="project-summary">
                <p>{p.summary[locale]}</p>
                <p className="project-output">
                  {p.metrics.length ? (
                    <>
                      {p.metrics[0].value} {t.metricLabels[p.metrics[0].label]}
                    </>
                  ) : (
                    p.services.map((s) => s[locale]).join(" / ")
                  )}
                </p>
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
      <section className="experience section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">{t.experience}</p>
          <h2>
            {locale === "en"
              ? "The work, and the roles behind it."
              : "Pekerjaan dan peran di baliknya."}
          </h2>
        </div>
        <div className="experience-priority">
          {projects
            .filter((p) => p.role)
            .map((p) => (
              <a key={p.slug} href={localPath(locale, `/work/${p.slug}/`)}>
                <strong>{p.company}</strong>
                <span>{p.role![locale]}</span>
                <small>{p.period}</small>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
        </div>
        <details className="older-experience">
          <summary>{t.older}</summary>
          {experience
            .filter((e) => !e.slug)
            .map((e) => (
              <div key={e.name}>
                <strong>{e.name}</strong>
                <span>
                  {locale === "id"
                    ? (
                        {
                          "Web Developer & Growth Hacking Specialist":
                            "Web Developer & Spesialis Growth Hacking",
                          "Copywriter & Python Data Analyst":
                            "Penulis Teks & Analis Data Python",
                          "Tour Organizer and Operational":
                            "Pengelolaan Tur & Operasional",
                          "Travel industry experience":
                            "Pengalaman industri perjalanan",
                          "Growth Hacking": "Growth Hacking",
                        } as Record<string, string>
                      )[e.role]
                    : e.role}
                </span>
              </div>
            ))}
        </details>
      </section>
      <section className="capabilities section" id="capabilities">
        <div className="section-heading">
          <p className="eyebrow">{t.capabilities}</p>
        </div>
        <div className="capability-list">
          {t.capabilityGroups.map(([name, items], i) => (
            <div key={String(name)}>
              <h3>
                <span>0{i + 1}</span>
                {name as string}
              </h3>
              <ul>
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
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
        </div>
      </section>
    </Site>
  );
}
