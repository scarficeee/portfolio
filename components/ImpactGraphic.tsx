import type { Locale, Project } from "@/content/types";
import { text } from "@/content/copy";

export function ImpactGraphic({
  project,
  locale,
  variant = "dark",
}: {
  project: Project;
  locale: Locale;
  variant?: "dark" | "light";
}) {
  const t = text(locale);
  if (project.comparison) {
    const comparison = project.comparison;
    return (
      <div className={`impact-comparison${variant === "light" ? " is-light" : ""}`}>
        <div className="impact-comparison-heading">
          <h4>{comparison.title[locale]}</h4>
          <div className="impact-comparison-legend" aria-hidden="true">
            <span><i className="is-before" />{comparison.beforeLabel[locale]}</span>
            <span><i className="is-after" />{comparison.afterLabel[locale]}</span>
          </div>
        </div>
        <div className="impact-comparison-grid">
          {comparison.metrics.map((metric) => {
            const beforeWidth = metric.before === null
              ? 0
              : metric.before === 0
                ? 0
                : Math.max(1.5, (metric.before / metric.after) * 100);
            return (
              <article className="impact-comparison-card" key={metric.label.en}>
                <h5>{metric.label[locale]}</h5>
                <div className="impact-compare-line">
                  <span>{locale === "en" ? "Before" : "Sebelum"}</span>
                  <i className="impact-compare-track" aria-hidden="true">
                    {metric.before !== null && <i className="impact-compare-fill is-before" style={{ width: `${beforeWidth}%` }} />}
                  </i>
                  <strong>{metric.beforeDisplay[locale]}</strong>
                </div>
                <div className="impact-compare-line">
                  <span>{locale === "en" ? "After" : "Sesudah"}</span>
                  <i className="impact-compare-track" aria-hidden="true">
                    <i className="impact-compare-fill is-after" style={{ width: "100%" }} />
                  </i>
                  <strong>{metric.afterDisplay[locale]}</strong>
                </div>
              </article>
            );
          })}
        </div>
        <p className="impact-comparison-note">{comparison.note[locale]}</p>
      </div>
    );
  }

  if (project.slug === "japantrips") {
    const chart = project.insights?.charts?.[0];
    if (chart) {
      const maxReach = Math.max(...chart.items.map((item) => item.value), 1);
      return (
        <div className="impact-platform-chart">
          <div className="impact-platform-chart-heading">
            <h4>{chart.title[locale]}</h4>
            <span>{chart.unit[locale]}</span>
          </div>
          {chart.items.map((item) => (
            <div className="impact-metric-row" key={item.label.en}>
              <div><span>{item.label[locale]}</span><strong>{item.display[locale]}</strong></div>
              <i className="impact-metric-track" aria-hidden="true"><i style={{ width: `${(item.value / maxReach) * 100}%` }} /></i>
            </div>
          ))}
          {chart.note && <p className="impact-platform-chart-note">{chart.note[locale]}</p>}
        </div>
      );
    }
  }

  const max = Math.max(...project.metrics.map((metric) => Number(metric.value.replace(/[+%,]/g, ""))), 1);
  return (
    <div className="impact-metric-chart">
      {project.metrics.map((metric) => {
        const value = Number(metric.value.replace(/[+%,]/g, ""));
        return (
          <div className="impact-metric-row" key={metric.label}>
            <div><span>{t.metricLabels[metric.label]}</span><strong>{metric.value}</strong></div>
            <i className="impact-metric-track" aria-hidden="true"><i style={{ width: `${(value / max) * 100}%` }} /></i>
          </div>
        );
      })}
    </div>
  );
}
