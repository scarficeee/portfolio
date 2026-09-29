# Rifaldy Rizqya — Digital Work Archive

The existing portfolio redesigned as a Japanese editorial casebook. Same Site, same address.

## Edit and build

- `src/data.mjs`: canonical identity, project stories, metrics, experience, credentials, documentation and evidence.
- `build.mjs`: static HTML generator for the cover, five case pages, 404 and sitemap.
- `dist/styles.css`: editorial composition, responsive layouts and restrained motion.
- `dist/app.js`: menus, reading preferences, evidence viewer and project correspondence.
- `dist/hero.png`: conceptual artwork, not client documentation.
- `.openai/hosting.json`: existing Site identity. Preserve its project_id.

Run `node build.mjs`, then `node verify.mjs`. Publish `dist` through the existing Site. No dependency installation is required. Content and navigation are rendered in HTML and remain readable without JavaScript.

## Case routes

/work/japanect/
/work/jaya-utama-perkasa/
/work/casadela/
/work/ladela/
/work/kurnia-group/

The index, professional experience and next-case navigation link to these dedicated pages.

## Evidence and documentation

Add original assets under `dist/evidence/<case-slug>/`. Add records to that project's `evidence` array in src/data.mjs. Use `documentation` for visual working examples rather than proof; both arrays use this schema:

```js
{
  id: 'E-01',
  type: 'gallery', // image, gallery, comparison, document
  title: 'Campaign reporting',
  source: 'Original reporting platform',
  date: 'Confirmed reporting date or period',
  description: 'What this material demonstrates.',
  caption: 'Context, scope and measurement notes.',
  redacted: false,
  layout: 'wide', // wide, detail, contact
  images: [{
    src: '/evidence/japanect/report.webp',
    alt: 'Describe the visible reporting information',
    caption: 'Specific image context'
  }],
  file: {url:'/evidence/japanect/report.pdf',label:'Open report'},
  metricLabels: ['Awareness']
}
```

Omit images or file when unused. Comparison records use exactly two images: before then after. Keep screenshots legible and uncropped. The fullscreen viewer supports gallery navigation, arrow keys, Escape, focus restoration, zoom and opening originals. metricLabels links a result to its evidence; use the exact metric label. Redact sensitive information in the actual asset before publication; the redacted flag only displays a caption.

After adding files and records, rebuild and verify. Evidence is added through source files; there is no upload admin or database.

## Content integrity

Japanect: +120% awareness, +80% leads, +50% organic growth, +40% bookings.
Kurnia Group: +1,010% awareness and +100% leads.

These are owner-supplied figures. Reporting periods, baselines and supporting files are not yet supplied. Other projects have no invented numeric results. Missing dates, campaign objectives, execution details, reflections and credentials remain explicitly pending in the content model. Replace null values only with confirmed information. The edition year is not an employment date.

## Interaction and access

Paper/Ink reading preference and reduced motion are saved locally. Device reduced-motion preferences are respected. The contact brief produces a reviewable, unsent email draft. Contact links and copy controls have no message-sending backend. Google Fonts is the only external display dependency; system fallbacks remain available.

The Site currently uses its existing public audience. Source changes preserve that setting.

## Verification

`node verify.mjs` checks all six main routes, metadata, local links and anchors, exact metrics, absence of outdated figures and QA evidence, and next-case navigation.

Desktop and mobile browser inspections covered all six pages, including 390 px and 320 px widths. Tested mobile index, reading mode, motion controls, brief review, Escape closing and focus restoration. Evidence gallery, comparison and document rendering were tested in a separate local QA build using clearly labelled fixtures. Those files are excluded from production.

`node build.mjs --qa` generates the isolated fixture site outside this checkout, under the workspace work/evidence-qa directory. Never publish that directory as project evidence.
