# Azul Morocco

An independent travel guide to Morocco, built with **Astro** and **Tailwind CSS**. The site is fully static.

## Pages
`/` Home · `/destinations/` · `/things-to-do/` · `/travel-tips/` · `/contact/` (trip request form) · `404`

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run media      # look up photos on Unsplash (needs UNSPLASH_ACCESS_KEY)
npm run build      # builds to dist/ from the committed src/data/media.json
npm run qa         # build + browser checks on every page (see tests/site.spec.ts)
```

## Photos
All photos come from the **Unsplash API** and are looked up by `scripts/fetch-media.mjs` (`npm run media`). It does *not* run during deploys: new photos are reviewed by eye before `src/data/media.json` is committed, so the hosting platform never needs the API key.

- Set `UNSPLASH_ACCESS_KEY` in your environment (never commit it). See `.env.example`.
- A photo is only accepted when its Unsplash **location** or the photographer's **own description or tags** say Morocco and match the place we searched for. A Fes slot can't get a Marrakech or Spanish photo.
- Results are saved to `src/data/media.json` (no secrets inside). Check each new photo by eye (it must show the place its slot is for), add hand-written alt text in `src/data/media.ts`, then commit the file.
- Unsplash demo keys allow 50 requests/hour, which is enough for about 14 slots per run. The script saves progress, so run `npm run media` again an hour later to fill the rest.
- Photographer credits are generated in the footer automatically, as Unsplash's guidelines require (hotlinked images, download endpoint triggered, attribution links with UTM).
- Any slot without a photo renders as a patterned clay panel.

**Video:** if `PEXELS_API_KEY` is set, the script looks for a Merzouga dune video whose Pexels page says Morocco. Desktop users then get a muted, looping video with a poster image, while phones and reduced-motion users keep the still photo. Pexels key issuance is currently paused, so v1 ships without video.

## Environment variables
| Name | Required | Purpose |
|---|---|---|
| `UNSPLASH_ACCESS_KEY` | only for `npm run media` | Unsplash API access key (not needed on Vercel) |
| `PEXELS_API_KEY` | optional | Hero video |
| `PUBLIC_FORM_ENDPOINT` | optional | URL the trip form POSTs JSON to (e.g. Formspree). Without it, the form says honestly that nothing was sent. |
| `SITE_URL` | optional | Canonical URL for the sitemap and Open Graph (default `https://morocco-liart.vercel.app`) |

## SEO
Each page has a title, meta description, canonical URL, Open Graph and Twitter tags (`public/og.jpg`) and JSON-LD. `@astrojs/sitemap` generates `sitemap-index.xml`.

See `BRIEF.md` for the design brief and `FACTS-TO-VERIFY.md` for facts to check before launch.

## Quality checks
`npm run qa` builds the site and, in desktop and mobile Chrome, checks every page in the sitemap for: HTTP 200, title/description/Open Graph image, a single `<h1>`, no console errors, no horizontal scrolling, a rendered photo header, legible header text over photos at several scroll positions, all visible images loading, and working internal links. Run it before every push.

## Performance notes
- Only the first slideshow photo loads up front; each next slide downloads just before it is shown.
- Non-header images use `loading="lazy"` and `fetchpriority="low"`; header photos are eager, high priority and more strongly compressed (they sit under a dark overlay).
- CSS is inlined, fonts are latin-only, self-hosted and preloaded; italics are synthesised rather than downloaded.
- `vercel.json` gives hashed assets a one-year immutable cache; Chrome prerenders internal pages on hover (Speculation Rules).

## Languages (English + French)
- English lives at `/`, French at `/fr/`. Every page exists in both; the header switch (EN/FR) links to the counterpart, and each page declares `hreflang` alternates (also in the sitemap).
- Pages are thin wrappers (`src/pages/**`, `src/pages/fr/**`) around views in `src/views/` that take a `lang` prop.
- Shared UI strings: `src/i18n/index.ts`. Page strings: `src/i18n/pages/*.ts`. Content data: `src/data/*.ts` and `src/data/*.fr.ts`, selected with `content(lang)` from `src/i18n/data.ts`.
- French dictionaries are typed against the English ones (`const fr: typeof en`), so a missing translation fails `astro check`.
- French copy should be reviewed by a native speaker before launch.

## Journal
Markdown articles in `src/content/journal/<lang>/<slug>.md` (same slug in both languages) with `title`, `description`, `date`, `photo` (a slot from `media.json`) and `tag`. Factual claims to verify are listed in `src/content/journal/FACTS.md`.
