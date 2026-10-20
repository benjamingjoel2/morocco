# Azul Morocco

An independent travel guide to Morocco, built with **Astro** and **Tailwind CSS**. The site is fully static.

## Pages
`/` Home · `/destinations/` · `/things-to-do/` · `/travel-tips/` · `/contact/` (trip request form) · `404`

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # fetches media (if keys are set), then builds to dist/
```

## Photos
All photos come from the **Unsplash API** and are looked up by `scripts/fetch-media.mjs`, which runs before every build.

- Set `UNSPLASH_ACCESS_KEY` in your environment (never commit it). See `.env.example`.
- A photo is only accepted when its Unsplash **location** or the photographer's **own description or tags** say Morocco and match the place we searched for. A Fes slot can't get a Marrakech or Spanish photo.
- Results are saved to `src/data/media.json` (no secrets inside). Commit that file so builds without a key still show the photos.
- Unsplash demo keys allow 50 requests/hour, which is enough for about 14 slots per run. The script saves progress, so run `npm run media` again an hour later to fill the rest.
- Photographer credits are generated in the footer automatically, as Unsplash's guidelines require (hotlinked images, download endpoint triggered, attribution links with UTM).
- Any slot without a photo renders as a patterned clay panel.

**Video:** if `PEXELS_API_KEY` is set, the script looks for a Merzouga dune video whose Pexels page says Morocco. Desktop users then get a muted, looping video with a poster image, while phones and reduced-motion users keep the still photo. Pexels key issuance is currently paused, so v1 ships without video.

## Environment variables
| Name | Required | Purpose |
|---|---|---|
| `UNSPLASH_ACCESS_KEY` | for photos | Unsplash API access key |
| `PEXELS_API_KEY` | optional | Hero video |
| `PUBLIC_FORM_ENDPOINT` | optional | URL the trip form POSTs JSON to (e.g. Formspree). Without it, the form says honestly that nothing was sent. |
| `SITE_URL` | optional | Canonical URL for the sitemap and Open Graph (default `https://morocco.vercel.app`) |

## SEO
Each page has a title, meta description, canonical URL, Open Graph and Twitter tags (`public/og.jpg`) and JSON-LD. `@astrojs/sitemap` generates `sitemap-index.xml`.

See `BRIEF.md` for the design brief and `FACTS-TO-VERIFY.md` for facts to check before launch.
