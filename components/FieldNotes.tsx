"use client";
import { useEffect, useState } from "react";
import type { Locale, Project } from "@/content/types";
import { projects } from "@/content/projects";
import { text, localPath } from "@/content/copy";
export function FieldNotes({
  locale,
  project,
  inline = false,
}: {
  locale: Locale;
  project?: Project;
  inline?: boolean;
}) {
  const [context, setContext] = useState("intro");
  useEffect(() => {
    if (project || inline) return;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section[id], main article[data-project], footer#contact",
      ),
    );
    const active = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.add(entry.target);
          else active.delete(entry.target);
        });
        const visible = [...active].sort((a, b) =>
          Number(b.hasAttribute('data-project')) - Number(a.hasAttribute('data-project')) ||
          b.getBoundingClientRect().top - a.getBoundingClientRect().top
        );
        if (visible[0]) setContext(visible[0].id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [project, inline]);
  const p = project || projects.find((item) => "work-" + item.slug === context),
    t = text(locale);
  const labels: Record<string, string> = {
    profile: t.profileTitle,
    impact: t.impact,
    work: t.work,
    approach: t.approach,
    experience: t.experience,
    capabilities: t.capabilities,
    tools: locale === "en" ? "Tools / Stack" : "Tools / Perangkat",
    archive: t.documentation,
    contact: t.contact,
  };
  const evidence = p?.metrics.find(
    (m) => m.evidenceId && p.documentation.some((d) => d.id === m.evidenceId),
  );
  return (
    <aside
      className={
        "field-notes " + (inline ? "field-notes-inline" : "field-notes-rail")
      }
      aria-label={locale === "en" ? "Field notes" : "Catatan singkat"}
    >
      <p className="field-signature">
        RR /{" "}
        {p
          ? `${locale === "en" ? "CASE" : "KASUS"} ${p.number}`
          : locale === "en"
            ? "FIELD NOTES"
            : "CATATAN"}
      </p>
      <div className="field-body" key={p?.slug || context}>
        <span className="caption">
          {p
            ? t.scope
            : labels[context] ||
              (locale === "en" ? "Current focus" : "Fokus saat ini")}
        </span>
        <h2>{p ? p.company : "Full-Stack Digital Marketing"}</h2>
        <p className="field-scope">
          {p
            ? p.services.map((s) => s[locale]).join(" / ")
            : "Growth / Web / Search / Content / Analytics"}
        </p>
        {p && p.metrics.length > 0 && (
          <p className="field-result">
            <strong>
              {
                (p.metrics.find((m) => m.label === "leads") || p.metrics[0])
                  .value
              }
            </strong>
            {
              t.metricLabels[
                (p.metrics.find((m) => m.label === "leads") || p.metrics[0])
                  .label
              ]
            }
          </p>
        )}
        {p && evidence && (
          <a
            className="text-link"
            href={localPath(
              locale,
              `/work/${p.slug}/#document-${evidence.evidenceId}`,
            )}
          >
            {t.evidenceLink} ↗
          </a>
        )}
      </div>
      <p className="field-location">
        Bandung, Indonesia
        <br />
        GMT+7
      </p>
    </aside>
  );
}
