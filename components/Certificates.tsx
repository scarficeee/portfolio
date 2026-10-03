"use client";
import { useState, type CSSProperties, type PointerEvent } from "react";
import type { CertificateGroup, CertificateRecord } from "@/content/certificates";
import { certificates, certificateGroups } from "@/content/certificates";
import type { Locale } from "@/content/types";
import { text } from "@/content/copy";
import { Dialog } from "./Dialog";

type Filter = "all" | CertificateGroup;
const filters: Filter[] = ["all", "marketing", "data", "language", "travel"];
export function Certificates({ locale }: { locale: Locale }) {
  const t = text(locale);
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<string | null>(null);
  const records = certificates.filter((item) => filter === "all" || item.group === filter);
  const currentIndex = active === null ? -1 : records.findIndex((item) => item.id === active);
  const current = currentIndex < 0 ? null : records[currentIndex];
  const move = (direction: number) => {
    if (!records.length) return;
    const nextIndex = (Math.max(currentIndex, 0) + direction + records.length) % records.length;
    setActive(records[nextIndex].id);
  };
  const handleTilt = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(x - .5) * 4}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(.5 - y) * 3}deg`);
    event.currentTarget.style.setProperty("--shine-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--shine-y", `${y * 100}%`);
  };
  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };
  const openLabel = (record: CertificateRecord) =>
    record.image
      ? `${t.openImage}: ${record.title[locale]}`
      : `${locale === "en" ? "View credential" : "Lihat kredensial"}: ${record.title[locale]}`;

  return (
    <section className="certificates section" id="certificates">
      <div className="certificates-orbit" aria-hidden="true"><span>資格</span></div>
      <div className="section-heading certificate-heading">
        <p className="eyebrow">{t.certificatesEyebrow}</p>
        <div className="certificate-title-row">
          <h2>{t.certificatesTitle}</h2>
          <span className="certificate-count">
            <strong>{String(certificates.length).padStart(2, "0")}</strong> <i>/</i> {t.certificatesLabel}
          </span>
        </div>
        <p>{t.certificatesIntro}</p>
      </div>

      <div className="certificate-toolbar">
        <span>{locale === "en" ? "Browse by focus" : "Jelajahi berdasarkan bidang"}</span>
        <div className="certificate-filters" role="group" aria-label={locale === "en" ? "Filter certificates" : "Filter sertifikat"}>
          {filters.map((value) => {
            const count = value === "all" ? certificates.length : certificates.filter((item) => item.group === value).length;
            return (
              <button
                className={filter === value ? "is-active" : ""}
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => { setFilter(value); setActive(null); }}
              >
                {value === "all"
                  ? locale === "en" ? "All" : "Semua"
                  : certificateGroups[value][locale]}
                <small>{count}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="certificate-gallery" aria-live="polite" data-count={records.length}>
        {records.map((record, index) => {
          const sequence = certificates.findIndex((item) => item.id === record.id) + 1;
          return (
            <figure
              className={`certificate-card ${record.image ? "has-image" : "text-only"}`}
              key={record.id}
              style={{ "--certificate-order": index } as CSSProperties}
            >
              {record.image ? (
                <button
                  className="certificate-image-button has-image"
                  type="button"
                  onClick={() => setActive(record.id)}
                  onPointerMove={handleTilt}
                  onPointerLeave={resetTilt}
                  aria-label={openLabel(record)}
                >
                  <span className="certificate-image-mat">
                    <img src={record.image} alt={`${record.title[locale]} · ${record.issuer}`} loading="lazy" decoding="async" />
                  </span>
                  <span className="certificate-open" aria-hidden="true">↗</span>
                  <span className="certificate-view-hint">{locale === "en" ? "View certificate" : "Lihat sertifikat"}</span>
                </button>
              ) : (
                <button
                  className="certificate-text-button"
                  type="button"
                  onClick={() => setActive(record.id)}
                  onPointerMove={handleTilt}
                  onPointerLeave={resetTilt}
                  aria-label={openLabel(record)}
                >
                  <span className="certificate-text-topline">
                    <span>{record.kind?.[locale] || certificateGroups[record.group][locale]}</span>
                    <span>{String(sequence).padStart(2, "0")}</span>
                  </span>
                  <span className="certificate-text-title">{record.title[locale]}</span>
                  <span className="certificate-text-issuer">{record.issuer}</span>
                  <span className="certificate-text-arrow" aria-hidden="true">↗</span>
                </button>
              )}
              <figcaption>
                {record.image ? (
                  <div>
                    <span className="certificate-card-title">{record.title[locale]}</span>
                    <span className="certificate-card-issuer">{record.issuer}</span>
                    {record.date && <span className="certificate-card-date">{record.date[locale]}</span>}
                  </div>
                ) : (
                  <div>
                    <span className="certificate-card-date">{record.date?.[locale] || certificateGroups[record.group][locale]}</span>
                    <span className="certificate-card-issuer">{locale === "en" ? "Select to view details" : "Pilih untuk melihat detail"}</span>
                  </div>
                )}
                <span className="certificate-card-index">{String(sequence).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p className="certificate-footnote">
        <span aria-hidden="true">✳</span>
        {locale === "en"
          ? "Certificates, professional training, and language learning. Select a card to explore."
          : "Sertifikasi, pelatihan profesional, dan pembelajaran bahasa. Pilih kartu untuk melihat detail."}
      </p>

      {current && (
        <Dialog
          title={current.title[locale]}
          onClose={() => setActive(null)}
          className="certificate-lightbox"
          closeLabel={t.close}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          }}
        >
          <div className="certificate-lightbox-stage">
            {current.image ? (
              <img src={current.image} alt={`${current.title[locale]} · ${current.issuer}`} />
            ) : (
              <div className="certificate-detail-copy">
                <span>{current.kind?.[locale] || certificateGroups[current.group][locale]}</span>
                <h3>{current.title[locale]}</h3>
                <p>{current.issuer}</p>
                {current.date && <small>{current.date[locale]}</small>}
                <i />
                <small>{locale === "en" ? "Professional learning record" : "Catatan pembelajaran profesional"}</small>
              </div>
            )}
          </div>
          <div className="certificate-lightbox-meta">
            <div>
              <span>{current.issuer}</span>
              <p>{current.date?.[locale] || certificateGroups[current.group][locale]}</p>
            </div>
            {records.length > 1 && (
              <div className="certificate-lightbox-controls">
                <button type="button" onClick={() => move(-1)} aria-label={t.previous}>←</button>
                <span>{String(currentIndex + 1).padStart(2, "0")} / {String(records.length).padStart(2, "0")}</span>
                <button type="button" onClick={() => move(1)} aria-label={t.nextImage}>→</button>
              </div>
            )}
          </div>
        </Dialog>
      )}
    </section>
  );
}
