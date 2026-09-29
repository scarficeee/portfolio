import { stack } from "@/content/tools";
import type { Locale } from "@/content/types";
export function Tools({ locale }: { locale: Locale }) {
  return (
    <section className="tools section" id="tools">
      <div className="section-heading">
        <p className="eyebrow">
          {locale === "en" ? "Tools / Stack" : "Tools / Perangkat"}
        </p>
        <h2>
          {locale === "en"
            ? "The tools behind the work."
            : "Perangkat di balik pekerjaan."}
        </h2>
        <p>
          {locale === "en"
            ? "Chosen for the task, from reaching people to understanding results."
            : "Digunakan sesuai kebutuhan, dari menjangkau orang hingga memahami hasil."}
        </p>
      </div>
      <ul className="tool-list">
        {stack.map((tool) => (
          <li className="tool-item" key={tool.icon}>
            <span
              className="tool-icon"
              style={{
                maskImage: `url(/icons/${tool.icon}.svg)`,
                WebkitMaskImage: `url(/icons/${tool.icon}.svg)`,
              }}
              aria-hidden="true"
            />
            <div>
              <h3>{tool.name}</h3>
              <span className="caption">{tool.category[locale]}</span>
            </div>
            <p className="tool-note">{tool.note[locale]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
