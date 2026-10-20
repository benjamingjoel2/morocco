# Azul Morocco: Creative Brief

> *Azul* (ⴰⵣⵓⵍ) is the Amazigh greeting for hello. The site should feel like that: a warm welcome from someone who knows the country, not a brochure.

## 1. Positioning

Azul Morocco is an independent travel guide and trip-planning service for travellers who want to slow down. They might spend a week in one riad or a night in a desert camp instead of rushing through ten cities. The site helps people choose where to go, what to do and how to get around, then lets them ask for a tailor-made itinerary through the Contact/Booking page.

**Audience:** curious adults aged 28–60 travelling as couples, friends or small families. Most are first-time visitors to Morocco and want guidance without being sold a package tour.

## 2. Colour palette: "Clay, Tile & Tea"

The colours come from Moroccan materials, not from flag colours or travel clichés.

| Token | Name | Hex | Source / use |
|---|---|---|---|
| `clay` | Pisé Clay | `#B4532A` | Rammed-earth kasbah walls in the Drâa valley. Primary brand colour, CTAs |
| `clay-deep` | Tannery Red | `#7E3219` | Fes dye vats. Hover states, footer |
| `majorelle` | Majorelle | `#2440A0` | Garden blue in Marrakech. Links, focus rings, single accents (used sparingly) |
| `chaouen` | Chaouen Wash | `#A9C1E4` | Chefchaouen lime-wash. Soft section backgrounds, tags |
| `saffron` | Taliouine Saffron | `#E3A21A` | Saffron fields near Taliouine. Highlights, star ratings, small details |
| `mint` | Atay Mint | `#2E6A52` | Mint tea and zellige green. "Good to know" callouts, success states |
| `sand` | Erg Sand | `#F4E9D8` | Erg Chebbi dunes. Page background (instead of pure white) |
| `plaster` | Tadelakt | `#FBF6EE` | Polished lime plaster. Cards, surfaces |
| `ink` | Argan Night | `#1F1A15` | Night sky over the Sahara. Body text, dark sections |

- Text/background pairs are checked against WCAG AA (ink on sand ≈ 15:1; plaster on clay-deep ≈ 8:1). White text on `clay` is used only for large text and buttons, where it passes AA (≈ 4.9:1).
- Subtle zellige texture: an 8-point-star line pattern in SVG at 4–6% opacity on dark sections. It's drawn by us, not traced from any existing tile.

## 3. Typography

- **Display: [Fraunces](https://fonts.google.com/specimen/Fraunces)** (variable serif, soft "SOFT" and "WONK" axes). Large, airy headlines with tight leading. The italic is used for single emotive words ("*slowly*", "*sunset*").
- **Body / UI: [Manrope](https://fonts.google.com/specimen/Manrope)** (geometric-humanist sans). It's clean and very legible at small sizes on mobile.
- **Accent:** Tifinagh characters (ⴰⵣⵓⵍ) appear only as a decorative label in the logo lockup and footer. They're rendered with the system font *Noto Sans Tifinagh* as an SVG path, so we don't load an extra webfont.
- Both fonts are self-hosted through `@fontsource-variable` (no Google Fonts request), with `font-display: swap` and only the latin subset.
- Scale: fluid `clamp()` sizes. H1 runs from 3rem on mobile to 7.5rem on desktop. Eyebrow labels are small-caps Manrope with wide tracking.

## 4. Layout style

- **Editorial, magazine-like.** The page uses a 12-column grid with deliberately asymmetric image/text splits (7/5, 5/7), and some images bleed off the edge.
- **Arch motif.** Some images are masked in a horseshoe/pointed-arch shape (CSS `clip-path` / SVG mask), echoing medina doorways. It's used maybe twice per page so it stays special.
- **Generous whitespace.** Sections are separated by plenty of space and colour shifts (sand → plaster → ink) rather than lines.
- **Horizontal "journey" strips.** Destinations sit in a draggable, snap-scrolling row on mobile and a staggered grid on desktop.
- **Motion:** gentle fade-and-rise on scroll (IntersectionObserver, ~400 ms), a slow Ken Burns effect on the hero still, and hover states that tilt image scale by 1.03. All motion respects `prefers-reduced-motion`.
- **Navigation:** a slim sticky header that turns from transparent to sand on scroll, with a full-screen overlay menu on mobile.

## 5. Tone of voice

- **A well-travelled friend, not a tour operator.** It's warm, specific and a little poetic, but always useful.
- We name real things: the Bab Bou Jeloud gate, the Chouara tannery, *msemen* at breakfast, the Gnaoua festival in Essaouira. We avoid generic phrases like "exotic", "land of contrasts" or "hidden gem".
- Morocco is shown as a modern, living country (Arabic, Amazigh and French in daily life) and not as a backdrop.
- Copy is short and scannable: 2–3 sentence intros, then lists and facts. Practical honesty matters, so we cover haggling etiquette, Ramadan timing and dressing for the medina.
- We greet with *Azul* and sign off with *Ar tufat* ("see you soon" in Tamazight) where it fits naturally, and use the words sparingly.

## 6. Hero concept: "From the rooftop"

- A full-bleed **still photo** of the Sahara near Merzouga at golden hour, or a Marrakech/Fes rooftop at dusk, from Unsplash. It gets a slow Ken Burns zoom, which stops under reduced motion. Pexels has paused new API keys, and Unsplash's API offers no video, so v1 launches **without video**. The hero component is video-ready: once a `PEXELS_API_KEY` is added, it switches to a muted, looping Pexels video with this photo as the poster, and mobile keeps the still.
- Headline (Fraunces, huge): **"Azul. Come in, the tea is poured."** with a short subline about slow journeys from the Rif to the Sahara.
- Two CTAs: *Explore destinations* and *Plan my trip*.
- Bottom of the hero: a small "now in Morocco" ticker (best regions for the current season, for example "October: Atlas trekking & desert nights") generated at build time.

## 7. Logo idea

- **Wordmark:** "azul" set in lowercase Fraunces italic, with **"MOROCCO"** in small, widely tracked Manrope caps beneath it.
- **Mark:** a simple **horseshoe arch** outline containing an **8-point star** (khatam), the most common zellige element. It's drawn as one SVG path in `clay`, so it works as a favicon and as an OG image badge.
- **Secondary lockup:** Tifinagh ⴰⵣⵓⵍ sits small beside the mark in the footer.
- We deliberately avoid the ⵣ (yaz) symbol as a logo, because it carries strong Amazigh identity and political meaning and shouldn't be used as a commercial brand.

## 8. Pages

1. **Home:** hero, intro, featured destinations, "a week in Morocco" sample route, seasonal guide, food strip, testimonials-style traveller notes (clearly fictional, not presented as real reviews; or omitted) and a CTA.
2. **Destinations:** Marrakech, Fes, Chefchaouen, Sahara (Merzouga/Erg Chebbi), the High Atlas (Imlil/Toubkal), Essaouira, the Aït Benhaddou and Ouarzazate area, and the Atlantic coast (Taghazout). Each has a mood, a "best for" note, how long to stay and how to get there.
3. **Things to Do:** hammam, cooking a tagine, Atlas trekking, a desert camp, surfing, festivals (Gnaoua, Fes Sacred Music, Imilchil, Rose Festival in Kelaat M'Gouna) and food to try.
4. **Travel Tips:** best time to go, visas and entry, money (dirham), getting around (Al Boraq high-speed train, ONCF, CTM buses, grands taxis), etiquette, Ramadan, safety, packing, language basics (Darija + Tamazight phrases).
5. **Contact/Booking:** a trip-request form (dates, travellers, interests, budget) with client-side validation. It's a static form (Vercel-compatible, no backend) that posts to a placeholder you can wire to Formspree/Resend later.

## 9. Ideas taken from the reference (sabbatical.travel)

I studied the reference's home page by rendering it in a headless browser (1440px). I borrowed **ideas only**. We reuse no text, images, logo, fonts, colours or code, and no page recreates its structure one-to-one.

**What the reference does, and what we take from it:**

| Reference idea | How Azul Morocco reinterprets it |
|---|---|
| Cinematic full-bleed hero video, with almost no UI on top | Merzouga dune hero (still photo with slow zoom for now; video-ready), but with a visible headline, two CTAs and the seasonal ticker. Ours is warmer and more guiding. |
| Tiny, widely tracked uppercase "eyebrow" labels above every section | Eyebrow labels in Manrope small caps, coloured `clay`, often paired with a Tifinagh or Darija word |
| Dark section with a horizontally scrolling rail of experience cards | "Things to do" rail on an `ink` background with a zellige texture. Cards use arch-masked images and a Moroccan region tag. |
| Checkerboard of 50/50 image ↔ text tiles alternating sides | Used once on Home for "Three ways to feel Morocco" (Medina / Mountains / Sahara), with unequal splits (7/5) and arch masks instead of straight squares |
| Numbered three-step process (01/02/03) with a progress hairline | "How we plan your trip": 01 Tell us · 02 We sketch a route · 03 You travel. The progress line is drawn in a zellige dot pattern. |
| Full-bleed photo "breathers" between content sections | One or two per page (Atlas valley, Essaouira ramparts) with a slow parallax that's disabled under reduced motion |
| Large centred pull quote | A single centred line from our own copy, for example a Moroccan proverb with an attribution. It's not presented as press coverage, and there's no "as seen in" logo wall. |
| Restrained, luxurious pacing with a lot of empty space | Keep the generous spacing, but use a warmer, more saturated palette and friendlier copy |

**What we deliberately do *not* take:** the condensed all-caps display serif look (we use soft, lowercase-friendly Fraunces), the greige/white palette, the centred four-point-star logo, dotted ghost buttons (ours are solid clay pill buttons), the wellness/"transformation" voice, and the press-logo strip.

## 10. Technical notes

- Astro (static output) + Tailwind CSS. Sitemap via `@astrojs/sitemap`, and each page gets its own title, meta description and OG image.
- Media is looked up at **build time** by a script that uses `UNSPLASH_ACCESS_KEY` / `PEXELS_API_KEY` from env (Pexels is optional and currently unused). Unsplash photos are hotlinked from `images.unsplash.com` with sized AVIF/WebP `srcset` parameters, and the download endpoint is triggered, as Unsplash's API guidelines require. Each photo is checked for a Morocco location or description before it's accepted, and photographer credits are generated into the footer automatically. Keys never touch the repo.
- **Media decision:** v1 is Unsplash photos only, because Pexels key issuance is paused. If a Pexels key is added later, videos will be `muted loop playsinline autoplay` with a `poster`, and on viewports under 768px (or with reduced motion), only the still is used.
