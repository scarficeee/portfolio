# Rifaldy Rizqya — Growth, by design.

A complete responsive portfolio built with lightweight HTML, CSS, and JavaScript. It needs no installation or build step. Open `dist/index.html` in a browser, or serve `dist` using any static host.

## Structure and visitor journey

1. **Hero:** introduces Rifaldy, his growth and development positioning, location, and direct paths to work and contact.
2. **Selected work:** four editorial cards for Japanect, Jaya Utama Perkasa, Casadela Canggu, and Ladela.id. Native expandable panels show role details and support future challenge, actions, results, and tools.
3. **About:** the personal story and connection between strategic thinking and practical execution.
4. **Services:** four outcome-focused offerings cover performance marketing, websites, analytics, and content/brand direction.
5. **Experience:** nine selected roles. Dates can be added without changing the layout.
6. **Skills and foundation:** categorized skills, education, languages, and a quiet certifications accordion.
7. **Contact:** working email, WhatsApp, LinkedIn, and Instagram links, plus city-level location.

## Visual direction

Contemporary Japanese editorial design: warm ivory (#eeece5), charcoal (#242722), deep indigo (#252f49), and muted crimson (#a44335). Manrope and DM Sans pair with italic Georgia for contrast. Generous spacing, fine rules, understated kanji, typography-led project covers, and one original AI-generated architectural image carry the visual identity. Project title panels are editorial treatments, not supplied corporate logos or screenshots of completed client sites.

Motion is limited to gentle entrance transitions and hover feedback. Reduced-motion preferences are respected. Native details/summary controls support keyboard interaction; visible focus styles and a skip link support navigation.

## Editable files

- `dist/index.html` — page metadata, navigation, and hero copy.
- `dist/content.js` — project details, professional roles, services, skills, education, languages, and certifications.
- `dist/app.js` — section templates, remaining website copy, and scroll reveals.
- `dist/styles.css` — palette, typography, layouts, and responsive rules.
- `dist/hero.png` — original architectural artwork.
- `.openai/hosting.json` — existing Site identity and static output configuration. Keep the project ID when publishing changes to this Site.

All website copy is included directly in these readable source files. No framework, dependency installation, or secret credentials are required. This lightweight implementation was chosen for a fast, maintainable one-page portfolio.

## Content awaiting your factual references

Only the written brief was supplied; the referenced profile screenshots were not attached. Therefore the site does not invent dates, metrics, campaign budgets, project deliverables, certificate names, graduation dates, grades, or language proficiency levels.

Update the following in `dist/content.js` when you have the verified information:

- Each project's `objective`, `actions`, `results`, and `tools`. Until then, the role is shown and the panel says the detailed case study is being prepared.
- Each experience entry's `period`, and the exact Japantrips job titles. The list is selected experience, not a claim about chronological order or current employment.
- `certifications`: add objects with `name`, `issuer`, optional `year`, and optional `url`.
- Education `program`, `period`, and `grade`.
- Language `level` values.

Null fields are hidden. The certifications accordion has a short editable notice until verified certificates are entered. Skills and service offerings follow the brief and should be reviewed with the profile references.

## Hosting and contact behavior

The deployed Site starts private to its owner. Public sharing can be enabled separately when ready. Email opens the visitor's email application; WhatsApp opens the supplied number; social links open in a new tab. No message is automatically sent, and no form backend or analytics service is configured.

Google Fonts is the only external display dependency; system font fallbacks keep the page readable if it is unavailable. The artwork is bundled locally.
