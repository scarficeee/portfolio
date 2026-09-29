# Rifaldy Rizqya — portfolio source

This is the actual source of the existing portfolio, migrated to Next.js, TypeScript and Tailwind CSS. It keeps the original paper, ink, indigo and vermilion casebook identity. The same Git history and Site ID are retained.

## Install and run

Install Node.js 22 or newer. Open this folder in VS Code, then open Terminal > New Terminal:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Save a source file to see your changes. Stop with Ctrl+C. To choose a different port, set the PORT environment variable before running the command.

```sh
npm run build
npm run typecheck
npm run verify
```

The production website is exported to `out/`. Publish that folder, not the source or node_modules. This is a static site with no database or email-sending server. The included development launcher uses Next.js in one process, and builds use worker threads for compatibility with restricted Windows environments.

## Where to edit

- `content/projects.ts`: the single source of project facts, numbers, roles, dates, story copy and documents.
- `content/copy.ts`: EN/ID navigation, profile, homepage, labels, forms and empty states.
- `content/identity.ts`: contact information and earlier experience.
- `content/types.ts`: the content schema and allowed fields.
- `components/Home.tsx`: homepage composition.
- `components/Case.tsx`: shared case-study layout.
- `components/Documentation.tsx`: curated gallery, full archive and lightbox.
- `components/Chrome.tsx`: navigation, language and reading preferences.
- `components/Contact.tsx`: contact and reviewable email brief.
- `styles/globals.css`: visual system and responsive layouts. Tailwind is also available in component class names.
- `app/(en)` and `app/(id)`: small route wrappers. Both languages share all layout components.

English is at `/` and `/work/<slug>/`. Indonesian is at `/id/` and `/id/work/<slug>/`. The language switch keeps the current project and anchor, restores the reading position where practical, and saves the preference locally. Internal links keep the active language; a direct URL always respects its explicit language. Root URLs default to English.

## Replace the profile photograph

Place the real photo at:

`public/media/profile/portrait.webp`

Use a 4:5 image with the face near the upper middle. Replace the file under the same name to update it; no component edits are needed. The crop is controlled by `.portrait-media img` in styles/globals.css. If the file is missing, the site displays a designed placeholder. Rebuild before publishing changes.

## Add project documentation

1. Redact confidential information in the actual image or PDF.
2. Save the safe exported file in the matching folder below.
3. Find the project in `content/projects.ts`.
4. Add a record to its `documentation` array.
5. Save. The gallery, archive, captions and lightbox update together.

| Project | Public asset folder |
| --- | --- |
| Portrait | public/media/profile/ |
| Japanect | public/media/japanect/ |
| Jaya Utama Perkasa | public/media/jup/ |
| Casadela | public/media/casadela/ |
| Ladela | public/media/ladela/ |
| Kurnia Group | public/media/kurnia/ |

Example record (use real details, not these example descriptions):

```ts
{
  id: 'E-01',
  image: '/media/japanect/evidence-01.webp',
  alt: { en: 'Campaign reporting dashboard', id: 'Dashboard laporan campaign' },
  category: { en: 'Analytics', id: 'Analisis' },
  title: { en: 'Campaign report', id: 'Laporan campaign' },
  caption: { en: 'Explain what the document shows.', id: 'Jelaskan isi dokumennya.' },
  source: 'Name of the original reporting platform',
  period: 'Confirmed reporting period',
  featured: true,
  orientation: 'dashboard',
  evidence: true
}
```

`featured: true` selects a document for the curated view (up to four). Other documents remain in View all documentation. The first selected document is large, the second and third share a row on desktop, and the fourth is wide. Mobile uses one column. Images retain their original proportions; dashboards are not cropped.

Set `evidence: true` for supporting proof; other documents appear in the visual documentation chapter. Use an optional `file: '/media/japanect/report.pdf'` for a report download. For before/after, use `type: 'comparison'` and `images: ['/media/japanect/before.webp', '/media/japanect/after.webp']` instead of image. The first image is Before. The viewer supports arrows, Escape, swipe, zoom and original-image access.

Available orientations: portrait, landscape, square, dashboard, wide. All text fields use `{en, id}`. Facts such as source, period and image path have only one value.

To connect a result to evidence, add `evidenceId: 'E-01'` to its metric record and give the matching document `evidence: true`. No link is shown until a matching record exists.

## Edit the story or add a project

Change `title`, `summary`, `context` and `responsibility` in the project record. Fill `objective`, `strategy`, `execution`, and `reflection` with `{en: '...', id: '...'}` when you have the real story. Null chapters and unknown periods are omitted. No dates or campaign details have been invented.

To add a project, copy a record in content/projects.ts, give it a unique slug and number, fill the known fields, and create its media folder. Add no made-up results; `metrics: []` is valid. The homepage, both case routes, archive links, SEO and next-case sequence are generated from the same list. Rebuild after adding a route.

Updated figures are centralized in projects.ts: Japanect +120% awareness, +80% leads, +50% organic growth, +40% bookings; Kurnia +1,010% awareness and +100% leads. Reporting periods and original evidence are still awaiting your files. They are not presented as independently verified analytics.

## Safety and publishing

Everything inside public/ is public. Keep original confidential files outside this repository, or in ignored `/raw` or `/private` folders. Never use blur as redaction. Environment files and generated dependencies are ignored by Git. No secrets are required by this website.

Keep `.openai/hosting.json` and its existing project_id when updating the hosted portfolio. The existing public audience is preserved. Contact buttons open external apps; the brief is reviewed before opening an unsent email draft.
