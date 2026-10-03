import type { Locale, ProjectInsights } from "@/content/types";

export function CaseInsights({
  insights,
  locale,
}: {
  insights: ProjectInsights;
  locale: Locale;
}) {
  return (
    <section className="case-insights" id="insights">
      <header className="case-insights-heading">
        <p className="eyebrow">{locale === "en" ? "Signals & decisions" : "Data & keputusan"}</p>
        <div>
          <h2>{insights.title[locale]}</h2>
          <p>{insights.intro[locale]}</p>
        </div>
        {insights.period && <span className="case-insights-period">{insights.period[locale]}</span>}
      </header>

      {insights.snapshots?.length ? (
        <div className="case-snapshot-grid">
          {insights.snapshots.map((item) => (
            <article className="case-snapshot" key={item.label.en}>
              <strong>{item.value}</strong>
              <span>{item.label[locale]}</span>
              {item.note && <small>{item.note[locale]}</small>}
            </article>
          ))}
        </div>
      ) : null}

      {insights.charts?.length ? (
        <div className="case-chart-grid">
          {insights.charts.map((chart) => {
            const maximum = Math.max(...chart.items.map((item) => item.value), 1);
            return (
              <figure className="case-data-chart" key={chart.title.en}>
                <figcaption>
                  <h3>{chart.title[locale]}</h3>
                  <span>{chart.unit[locale]}</span>
                </figcaption>
                <ul>
                  {chart.items.map((item) => (
                    <li key={item.label.en}>
                      <div className="case-data-chart-label">
                        <span>{item.label[locale]}</span>
                        <strong>{item.display[locale]}</strong>
                      </div>
                      <div className="case-data-chart-track" aria-hidden="true">
                        <span style={{ width: `${Math.max(2, (item.value / maximum) * 100)}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
                {chart.note && <p className="case-data-chart-note">{chart.note[locale]}</p>}
              </figure>
            );
          })}
        </div>
      ) : null}

      {insights.journey && (
        <div className="case-journey">
          <h3>{insights.journey.title[locale]}</h3>
          <ol>
            {insights.journey.steps.map((step, index) => (
              <li key={step.label.en}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.label[locale]}</strong>
                <p>{step.detail[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
