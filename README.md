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
node scripts/verify-motion.mjs
node scripts/verify-documentation.mjs
node scripts/verify-documentation-routes.mjs
```

The production website is exported to `out/`. Publish that folder, not the source or node_modules. This is a static site with no database or email-sending server. The included development launcher uses Next.js in one process, and builds use worker threads for compatibility with restricted Windows environments.

## Where to edit

- `content/projects.ts`: the single source of project facts, numbers, roles, dates, story copy and documents.
- `content/copy.ts`: EN/ID navigation, profile, homepage, labels, forms and empty states.
- `content/identity.ts`: contact information.
- `content/career.ts`: chronological career entries with the supplied 2022–2026 dates, localized periods and descriptions, parallel Japantrips responsibilities, and case links.
- `content/historical.ts`: unpublished editorial reference, including historical claims that need separate confirmation. It is not imported by the website.
- `content/tools.ts`: 25 owner-confirmed tools in nine groups, core emphasis, icons, and English/Indonesian usage notes.
- `content/types.ts`: the content schema and allowed fields.
- `components/Home.tsx`: homepage composition.
- `components/Motion.tsx`: one-time viewport reveals and 900ms metric counts; preference changes finish counters immediately.
- `components/motion-preferences.ts`: pre-paint loading/preferences, reduced-motion priority and short-lived internal-navigation markers. Initial loading ends at hydration/font readiness, with no minimum wait. Internal clicks use a thin line instead of the full monogram; hard refresh shows the opening state.
- `components/Monogram.tsx`: the exact existing R/R lettering, shared by navigation and loading.
- `components/WorkIndex.tsx`: seven compact editorial project rows, localized capabilities and outputs, and small data-driven result bars.
- `components/SectionArt.tsx`: lightweight decorative SVG backgrounds with related but varied geometry across the site.
- `components/Case.tsx`: shared case-study layout.
- `components/PerformanceGraphic.tsx`: accessible percentage bars shared by project previews and case results. Each project has one linear scale from zero to its largest reported percentage. Different measures are labelled individually; bar length does not represent raw counts or time-series data.
- `components/Documentation.tsx`: curated gallery, full archive and lightbox.
- `components/Chrome.tsx`: navigation, language and reading preferences.
- `components/Contact.tsx`: contact and reviewable email brief.
- `components/FieldNotes.tsx`: contextual desktop notes, with inline summaries on smaller screens. Project scope and metrics come directly from project data; evidence links appear only when a matching document exists.
- `components/Tools.tsx`: monochrome tool index. Notes remain readable on touch devices.
- `components/CapabilityMap.tsx`: seven keyboard-selectable capabilities around the marketing/growth core; a readable touch layout replaces the orbit on small screens.
- `components/Career.tsx`: compact career timeline and progression strip.
- `components/FieldNotes.tsx`: scroll-aware section/project context, percentage reading line, case index and conditional evidence links. The rail is hidden below 1280px; case notes remain inline on tablets and are omitted on mobile.
- `styles/globals.css`: visual system and responsive layouts. Tailwind is also available in component class names.
- `styles/professional.css`: final spacing, profile, calmer typography, charts and interaction refinements, loaded after the visual system.
- `styles/master.css`: capability map, timeline, expanded tools and refined contextual rail. Loaded last.
- `styles/motion.css`: shared timing, restrained graphics, row interactions and compact two-column contact hierarchy.
- `styles/documentation.css`: normalized gallery frames and centered, bounded image dialogs.
- `app/(en)` and `app/(id)`: small route wrappers. Both languages share all layout components.

English is at `/` and `/work/<slug>/`. Indonesian is at `/id/` and `/id/work/<slug>/`. The language switch keeps the current project and anchor, restores the reading position where practical, and saves the preference locally. Internal links keep the active language; a direct URL always respects its explicit language. Root URLs default to English.

The main positioning is Full-Stack Digital Marketer, with digital marketing and growth as the core. The seven capability groups live in `content/copy.ts`. Edit the `en` object for English and the `id` object for Indonesian. Creative editing and on-camera content are supporting skills. The conversation form also supports professional roles and collaboration; it only prepares a reviewable email draft.

Tool SVGs are vendored from Simple Icons (16.33.0; Canva from 11.15.0), under CC0. The license is in `public/icons/LICENSE.md`. Brand names and marks belong to their owners. No icon library or external font request is required at runtime.

The hero uses integrated abstract linework and a muted disc, without a staircase image or caption. Sharing previews use `public/social-cover.jpg`. Earlier illustration files remain source assets, but are not displayed in the hero. Only Japanect and Kurnia display growth charts; projects without reported figures use output summaries. The homepage index reads its concise capabilities and output from each project's `index` field.

## Replace the profile photograph

Place the real photo at:

`public/media/profile/portrait.webp`

Use a 4:5 image with the face near the upper middle. Replace the file under the same name to update it; no component edits are needed. The crop is controlled by `.portrait-media img` in styles/globals.css. If the file is missing, the site displays a typographic RR identity panel. No synthetic portrait is used. Rebuild before publishing changes.

## Add project documentation

1. Put public-safe `.webp`, `.png`, `.jpg`, `.jpeg` or `.avif` images in the matching folder below.
2. Run `npm run build` for publication. During `npm run dev`, image additions, replacements and removals now refresh the documentation manifest automatically.

That's all: no JSX or project-data edit is required. The build reads each project's `mediaFolder`, discovers valid still images, sorts filenames naturally (`image1`, `image2`, `image10`), creates smaller previews and renders the same gallery for every case. Hidden files/folders, `.gitkeep`, non-images and unreadable images are ignored by the gallery. Only place publishable files inside `public/`: the static export can still serve files that the gallery ignores. The original files are never modified.

Use `01-`, `02-`, etc. at the beginning of filenames to control the order. Replace a file under the same name to update it. The first image becomes the feature by default. Files added after a production build require another build and publication before they appear live.

| Project | Public asset folder |
| --- | --- |
| Portrait | public/media/profile/ |
| Japantrips | public/media/japantrips/ |
| Adventure Travel Group | public/media/adventure-travel/ |
| Japanect | public/media/japanect/ |
| Jaya Utama Perkasa | public/media/jup/ |
| Casadela | public/media/casadela/ |
| Ladela | public/media/ladela/ |
| Kurnia Group | public/media/kurnia/ |

Optional metadata inside a project's record in `content/projects.ts` (use real descriptions):

```ts
documentationMeta: {
  'japanect1.webp': {
    alt: { en: 'Campaign reporting dashboard', id: 'Dashboard laporan campaign' },
    category: { en: 'Analytics', id: 'Analisis' },
    title: { en: 'Campaign report', id: 'Laporan campaign' },
    caption: { en: 'Explain what the document shows.', id: 'Jelaskan isi dokumennya.' },
    featured: true,
    orientation: 'dashboard',
    fit: 'contain'
  }
}
```

`featured: true` moves a document to the front without hiding its supporting material. The curated view shows up to six documents: one feature, two supports, then three smaller entries. Remaining documents are in View all documentation. Short rows expand to avoid empty cells. The feature uses 3:2 (maximum 580px tall), dashboards use 16:10, and wide material uses 16:9. Supporting rows share 4:3 frames. Mobile uses one column, with 4:5 portrait and 1:1 square frames. Source proportions are always preserved. Set `fit: 'contain'` for screenshots/reports or `fit: 'cover'` for creative photography; evidence, dashboard/report types and recognizable data categories default to contain.

`scripts/prepare-documentation.mjs` runs before dev/build/typecheck. It creates responsive WebP previews at 480, 960 and 1440px where the source is large enough, without upscaling or changing originals. Generated files live in ignored `public/media/_previews/` and `.generated/`; do not edit these. The gallery loads a responsive preview lazily, while the lightbox loads the original only when opened. Replacing an image updates its cache-safe filename and removes obsolete generated previews. Sharp is used only during the build, with no image-processing dependency sent to visitors.

The shared viewer is 78vw (maximum 1320px) on desktop, 88vw on tablet and 94vw on mobile, with an 80dvh height cap. Images use contain; optional 2× zoom provides scroll-based pan. Escape, close and backdrop click restore the previous scroll position and focus. Arrow keys and horizontal touch swipes switch images. Zoom moves focus to the image so keyboard arrows pan it; Previous/Next controls remain available. Vertical gestures do not change images, and each new image starts at its original scroll position.

All documents appear in one Documentation section. Set `evidence: true` for supporting proof to keep its default contain fit; it does not create a separate section. Use an optional `file: '/media/japanect/report.pdf'` for a report download. For before/after, use `type: 'comparison'` and `images: ['/media/japanect/before.webp', '/media/japanect/after.webp']` instead of image. The first image is Before. The viewer supports arrows, Escape, swipe, zoom and original-image access.

Available orientations: portrait, landscape, square, dashboard, wide. Metadata text accepts `{en, id}` or a shared string. Without metadata, the gallery uses neutral bilingual labels and no fabricated description. Image dimensions determine portrait/square/landscape orientation. Unknown content defaults to contain so screenshots are never cropped accidentally. Existing `documentation` records remain supported and merge without duplicating discovered files.

To connect a result to evidence, add `evidenceId: 'E-01'` to its metric record and give the matching document `evidence: true`. No link is shown until a matching record exists.

## Edit the story or add a project

Change `title`, `summary`, `context` and `responsibility` in the project record. Fill `objective`, `strategy`, `execution`, and `reflection` with `{en: '...', id: '...'}` when you have the real story. Null chapters and unknown periods are omitted. No dates or campaign details have been invented.

To add a project, copy a record in content/projects.ts, give it a unique slug and number, fill the known fields, and create its media folder. Add no made-up results; `metrics: []` is valid. The homepage, both case routes, archive links, SEO and next-case sequence are generated from the same list. Rebuild after adding a route.

Updated figures are centralized in projects.ts. Latest owner-supplied campaign summaries report Japantrips +40% engagement, 500 leads and +25% sales for Brand Boost; a separate product campaign reports +30% customer inquiries; SEO / SEM reports +25% organic traffic and +20% bookings. Japanect Meta Ads reports +60% awareness and +40% leads; Kurnia reports +50% awareness and +50% leads. Japantrips' separate campaign periods are described on its case page rather than combined into one measurement period.

## Master revision verification — 30 September 2026

- `npm install`, `npm run dev`, `npm run build`, `npm run typecheck`, and `npm run verify` passed.
- EN/ID homepages checked at 1440, 1366, 1280, 1024, 820, 768, 430, 390, 375, 360 and 320px; no horizontal overflow. All five case studies checked in both languages at desktop, tablet and 320px.
- Confirmed the seven-node capability map and keyboard selection, 25 tools in nine groups, corrected career titles, reading themes, language switching, contact review, chart values and scroll-aware contextual rails.
- The atmosphere refinement removes the hero staircase, reduces the portrait to a 310px-wide 4:5 area on desktop, adds low-contrast section-specific linework, and replaces the large work banners with five 116px desktop rows. Career dates now reflect the supplied timeline; overlapping Japantrips responsibilities are explicit and Kakibudi is removed.
- Gallery tested locally with temporary, clearly labelled fixtures: curated four-item view, six-item archive, desktop/mobile lightbox, navigation, zoom, Escape, focus restoration, and missing-image state. Fixtures were removed before the production build.
- The supplied real portrait is installed at public/media/profile/portrait.webp and its desktop crop was checked. Project documentation files have not yet been supplied; no sample/test evidence is published.

## Documentation completion pass — 1 October 2026

- All five cases use a single Documentation section; the separate Evidence chapter and navigation are removed.
- Fixed featured-image selection so supporting images stay in the curated set. Added automatic responsive previews and improved keyboard pan, swipe direction detection, and image-position reset.
- `npm install`, the development route smoke check, production build, TypeScript, 12-route verification, motion checks and documentation image-processing tests passed on the current source.
- New responsive visual checks remain unverified: the browser automation runtime could not initialize. Previous visual checks above refer to the earlier dated pass.
- Real project media is now installed. Public galleries contain 41 images across Japanect (11), JUP (19), Casadela (4), Ladela (3) and Kurnia (4). Every image has a bilingual, image-specific title and caption, with a selected set featured first. Three originals are retained under the ignored `private/media/` folder because they show personal contact details, payment-account details, or unrelated outdated analytics; they are not included in the public export.
- Publication of this pass is pending because session policy rejected credential delivery to the source-publishing process. The local source and ZIP include these changes; the existing live website remains version 8.

### Automatic media discovery follow-up

- Case rendering now resolves images from each project's `mediaFolder` without requiring entries in `documentation`. Optional `documentationMeta` provides bilingual, image-specific client-facing titles, captions, categories, alt text, curated order, orientation and fit.
- The actual shared Case component was server-rendered for all five projects in EN/ID with 0, 1, 2, 3, 6 and 8 in-memory image records. These checks confirm one Documentation section, no Evidence section, automatic empty-state replacement, clickable thumbnail markup and responsive preview wiring. No fixture files were placed in `public/` or published.
- Browser initialization still fails, so these are render/build checks, not a claim of completed browser interaction or responsive visual QA.
- With the supplied media installed, the production build and route verification passed. All 10 EN/ID case exports have exactly one Documentation section and no empty state. The five existing local case URLs and all 44 original-image URLs returned HTTP 200 before the public-safe review; the development launcher watches project-media changes and writes manifest updates atomically.

### Client-facing image captions — 2 October 2026

- Added bilingual image titles, categories, alt text and captions across all five project galleries to explain each asset's role to prospective clients. Curated relevant examples appear first; the full public archive remains available below.
- Moved three unsuitable originals out of `public/` into ignored `private/media/`: a Japanect customer-contact sheet, an unrelated/out-of-period JUP analytics capture, and Kurnia's influencer reimbursement sheet. The original files are preserved locally and excluded from static export. The public gallery now contains 41 images.
- The screenshots are described as work artifacts and review material. Captions do not turn dashboard numbers into new performance claims.

### Japantrips and Adventure Travel case pages — 2 October 2026

- Added Japantrips and Adventure Travel Group to the work index and linked their experience timeline entries to the new case pages. The overlapping Japantrips reservations and internship roles still share their correct periods and one detailed case page.
- Added the image-supplied campaign details to Japantrips, Japanect, Kurnia and Jaya Utama Perkasa case copy. Japantrips and Adventure Travel each have a ready-to-use `public/media/` folder; put publishable images there and rebuild to include them in the gallery.
- Updated visible case figures to match the latest supplied images: Japanect 60% awareness / 40% leads, Kurnia 50% / 50%. Japantrips campaign outcomes retain their separate reported periods and are not combined into a single result.

## Safety and publishing

Everything inside public/ is public. Keep original confidential files outside this repository, or in ignored `/raw` or `/private` folders. Never use blur as redaction. Environment files and generated dependencies are ignored by Git. No secrets are required by this website.

Keep `.openai/hosting.json` and its existing project_id when updating the hosted portfolio. The existing public audience is preserved. Contact buttons open external apps; the brief is reviewed before opening an unsent email draft.
