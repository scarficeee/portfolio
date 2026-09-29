"use client";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/content/types";
import { identity } from "@/content/identity";
import { text } from "@/content/copy";
import { Dialog } from "./Dialog";
export function Contact({ locale }: { locale: Locale }) {
  const t = text(locale),
    [open, setOpen] = useState(false),
    [review, setReview] = useState(false),
    [goal, setGoal] = useState(""),
    [service, setService] = useState(t.serviceOptions[0]),
    [timing, setTiming] = useState(t.timings[0]),
    [notice, setNotice] = useState("");
  const note = `${t.greeting}\n\n${t.inquiry}\n\n${t.area}: ${service}\n${t.projectLabel}: ${goal.trim()}\n${t.timing}: ${timing}\n\n${t.ending}`;
  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setNotice(t.copied);
    } catch {
      setNotice(t.copyError);
    }
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    if (goal.trim()) setReview(true);
    else setNotice(t.required);
  }
  return (
    <>
      <footer id="contact" className="contact section">
        <div className="eyebrow">RIFALDY RIZQYA</div>
        <div className="contact-grid">
          <div>
            <h2>{t.contact}</h2>
            <p className="availability">{t.availability}</p>
            <button
              className="text-link"
              onClick={() => {
                setReview(false);
                setNotice("");
                setOpen(true);
              }}
            >
              {t.brief} ↗
            </button>
          </div>
          <address>
            <p>{t.location}</p>
            <a href={"mailto:" + identity.email}>{identity.email}</a>
            <button onClick={() => copy(identity.email)}>{t.copyEmail}</button>
            <a
              href={"https://wa.me/" + identity.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={identity.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </address>
        </div>
        <div className="footer-line">
          <span>Growth, by design.</span>
          <a href="#main">{t.backTop} ↑</a>
        </div>
        {!open && <p role="status">{notice}</p>}
      </footer>
      {open && (
        <Dialog
          closeLabel={t.close}
          title={t.brief}
          onClose={() => setOpen(false)}
          className="brief-dialog"
        >
          <div className="brief-body">
            <h2>{t.briefTitle}</h2>
            {review ? (
              <div>
                <pre className="brief-preview">{note}</pre>
                <a
                  className="solid-button"
                  href={`mailto:${identity.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(note)}`}
                >
                  {t.draft} ↗
                </a>
                <div className="brief-actions">
                  <button onClick={() => setReview(false)}>{t.edit}</button>
                  <button onClick={() => copy(note)}>{t.copyNote}</button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label htmlFor="service">{t.area}</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {t.serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <label htmlFor="goal">{t.goal}</label>
                <textarea
                  id="goal"
                  required
                  maxLength={1200}
                  rows={4}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder={t.goalHint}
                />
                <label htmlFor="timing">{t.timing}</label>
                <select
                  id="timing"
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                >
                  {t.timings.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button className="solid-button" type="submit">
                  {t.review} ↗
                </button>
                <p className="caption">{t.unsent}</p>
              </form>
            )}
            <p role="status">{notice}</p>
          </div>
        </Dialog>
      )}
    </>
  );
}
