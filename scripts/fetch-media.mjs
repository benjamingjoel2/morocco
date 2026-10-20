#!/usr/bin/env node
/**
 * Looks up every photo the site needs on Unsplash (and, optionally, a hero
 * video on Pexels) and writes the result to src/data/media.json.
 *
 * - Only photos that are verifiably from Morocco are accepted: the Unsplash
 *   location must say Morocco, or the photographer's own description/tags must.
 * - Results are cached in media.json, so builds without keys (or with an
 *   exhausted rate limit) still work and nothing is re-fetched needlessly.
 * - Keys are read from the environment only and are never written anywhere.
 *
 * Usage: node scripts/fetch-media.mjs [--refresh]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src/data/media.json');
const CACHE = join(root, 'scripts/.media-cache.json'); // rejected ids, gitignored

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = process.env.PEXELS_API_KEY;
const REFRESH = process.argv.includes('--refresh');
const UTM = 'utm_source=azul_morocco&utm_medium=referral';

/**
 * Every image slot on the site. `places` are words we expect in the photo's
 * location or description, so a "Fes" slot doesn't get a Marrakech photo.
 */
export const SLOTS = [
  { slot: 'hero', query: 'Merzouga Erg Chebbi dunes', places: ['merzouga', 'erg chebbi', 'sahara', 'erfoud'] },
  { slot: 'marrakech', query: 'Marrakech medina', places: ['marrakech', 'marrakesh'] },
  { slot: 'chefchaouen', query: 'Chefchaouen blue city', places: ['chefchaouen', 'chaouen'] },
  { slot: 'fes', query: 'Fes medina', places: ['fes', 'fez'] },
  { slot: 'tannery', query: 'Fes tannery Chouara', places: ['fes', 'fez', 'tanner'] },
  { slot: 'sahara', query: 'Sahara camels Merzouga', places: ['merzouga', 'sahara', 'erg chebbi', 'zagora', 'm\'hamid'] },
  { slot: 'atlas', query: 'Atlas Mountains Imlil', places: ['atlas', 'imlil', 'toubkal'] },
  { slot: 'essaouira', query: 'Essaouira port boats', places: ['essaouira'] },
  { slot: 'aitbenhaddou', query: 'Ait Benhaddou kasbah', places: ['benhaddou', 'ouarzazate'] },
  { slot: 'taghazout', query: 'Taghazout surf Morocco', places: ['taghazout', 'tamraght', 'imsouane', 'agadir'] },
  { slot: 'dades', query: 'Dades gorges Morocco', places: ['dades', 'todra', 'tinghir', 'boumalne'] },
  { slot: 'jemaa', query: 'Jemaa el-Fnaa Marrakech', places: ['jemaa', 'fna', 'marrakech', 'marrakesh'] },
  { slot: 'madrasa', query: 'Ben Youssef Madrasa Marrakech', places: ['ben youssef', 'madrasa', 'medersa'] },
  { slot: 'majorelle', query: 'Jardin Majorelle Marrakech', places: ['majorelle'] },
  { slot: 'souk', query: 'Marrakech souk spices', places: ['marrakech', 'marrakesh', 'souk', 'fes', 'fez'] },
  { slot: 'tagine', query: 'Moroccan tagine food', places: ['morocc', 'maroc', 'tagine', 'tajine'] },
  { slot: 'tea', query: 'Moroccan mint tea', places: ['morocc', 'maroc', 'tea'] },
  { slot: 'riad', query: 'Marrakech riad courtyard', places: ['riad', 'marrakech', 'fes', 'fez'] },
  { slot: 'gnaoua', query: 'Gnawa musicians Morocco', places: ['gnawa', 'gnaoua', 'essaouira', 'music'] },
  { slot: 'atlasValley', query: 'High Atlas valley village Morocco', places: ['atlas', 'imlil', 'valley', 'berber', 'amazigh'] },
  { slot: 'ramparts', query: 'Essaouira ramparts sunset', places: ['essaouira'] },
  { slot: 'hassan2', query: 'Hassan II Mosque Casablanca', places: ['hassan', 'casablanca'] },
  { slot: 'zellige', query: 'Moroccan zellige tiles', places: ['morocc', 'maroc', 'fes', 'fez', 'marrakech', 'rabat', 'meknes'] },
  { slot: 'desertCamp', query: 'desert camp Morocco night', places: ['merzouga', 'sahara', 'zagora', 'agafay', 'desert'] },
];

const isMorocco = (s = '') => /morocc|maroc|marroc|marokk|marrueco|marocc|المغرب|ⵍⵎⵖⵔⵉⴱ/i.test(s);

/** "Medina, Marrakesh 40000, Morocco" + city/country -> "Medina, Marrakesh, Morocco" */
export function placeLabel(parts) {
  const seen = new Set();
  return parts
    .flatMap((p) => (p || '').split(','))
    .map((p) => p.replace(/\d{4,}/g, '').trim())
    .filter((p) => p && !seen.has(p.toLowerCase()) && seen.add(p.toLowerCase()))
    .join(', ');
}
const lower = (s) => (s || '').toLowerCase();

function load(path, fallback) {
  try {
    return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback;
  } catch {
    return fallback;
  }
}

const media = load(OUT, { photos: {}, heroVideo: null });
const cache = load(CACHE, { rejected: [] });
const rejected = new Set(cache.rejected);
let remaining = Infinity;

async function unsplash(path) {
  if (remaining < 2) throw new Error('rate-limit');
  const res = await fetch(`https://api.unsplash.com${path}`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}`, 'Accept-Version': 'v1' },
  });
  const left = Number(res.headers.get('x-ratelimit-remaining'));
  if (!Number.isNaN(left)) remaining = left;
  if (res.status === 401) throw new Error('Unsplash rejected the key (401). Check UNSPLASH_ACCESS_KEY.');
  if (res.status === 403 || res.status === 429) throw new Error('rate-limit');
  if (!res.ok) throw new Error(`Unsplash ${res.status} on ${path}`);
  return res.json();
}

/** Returns how the photo was verified as Moroccan, or null. */
function verify(photo, places) {
  const loc = photo.location || {};
  const locText = placeLabel([loc.name, loc.city, loc.country]);
  const ownText = [photo.description, ...(photo.tags || []).map((t) => t.title)].join(' ');
  const allText = lower(`${locText} ${ownText} ${photo.alt_description || ''}`);
  const placeMatch = places.some((p) => allText.includes(p));
  if (!placeMatch) return null;
  if (isMorocco(loc.country) || isMorocco(loc.name)) return { by: 'location', where: locText };
  // A location elsewhere always wins over a caption that mentions Morocco.
  if (loc.country || loc.city || loc.name) return null;
  // Photographer's own words (not the auto-generated alt text) must say Morocco.
  if (isMorocco(ownText)) return { by: 'description', where: locText || 'Morocco' };
  return null;
}

function toRecord(p, v) {
  return {
    id: p.id,
    src: p.urls.raw,
    width: p.width,
    height: p.height,
    color: p.color,
    alt: p.alt_description || p.description || 'Photo from Morocco',
    location: v.where,
    verifiedBy: v.by,
    photographer: p.user.name,
    photographerUrl: `${p.user.links.html}?${UTM}`,
    photoUrl: `${p.links.html}?${UTM}`,
    downloadLocation: p.links.download_location,
    source: 'unsplash',
  };
}

async function fillSlot({ query, places }, usedIds) {
  const q = encodeURIComponent(query);
  const search = await unsplash(`/search/photos?query=${q}&per_page=20&orientation=landscape&content_filter=high`);
  // Cheap pre-filter on the search payload before spending requests on details.
  const candidates = search.results
    .filter((p) => !usedIds.has(p.id) && !rejected.has(p.id))
    .sort((a, b) => Number(isMorocco(lower(b.description))) - Number(isMorocco(lower(a.description))));
  for (const c of candidates.slice(0, 4)) {
    const full = await unsplash(`/photos/${c.id}`);
    const v = verify(full, places);
    if (v) return toRecord(full, v);
    rejected.add(c.id);
  }
  return null;
}

async function runUnsplash() {
  const used = new Set(Object.values(media.photos).map((p) => p.id));
  const missing = SLOTS.filter((s) => REFRESH || !media.photos[s.slot]);
  if (!missing.length) return console.log('[media] all Unsplash slots already filled.');
  for (const s of missing) {
    try {
      const rec = await fillSlot(s, used);
      if (rec) {
        media.photos[s.slot] = rec;
        used.add(rec.id);
        console.log(`[media] ${s.slot}: ${rec.photographer} — ${rec.location} (${rec.verifiedBy})`);
        // Unsplash API guidelines: register usage via the download endpoint.
        await unsplash(`${new URL(rec.downloadLocation).pathname}${new URL(rec.downloadLocation).search}`).catch(() => {});
      } else {
        console.warn(`[media] ${s.slot}: no verifiable Moroccan photo found for "${s.query}"`);
      }
    } catch (e) {
      if (e.message === 'rate-limit') {
        console.warn('[media] Unsplash rate limit reached; saved progress. Run again in an hour to fill the rest.');
        break;
      }
      throw e;
    }
  }
}

async function runPexels() {
  if (media.heroVideo && !REFRESH) return;
  const res = await fetch('https://api.pexels.com/videos/search?query=Merzouga%20Sahara%20dunes&orientation=landscape&per_page=30', {
    headers: { Authorization: PEXELS_KEY },
  });
  if (!res.ok) return console.warn(`[media] Pexels ${res.status}; hero stays a still photo.`);
  const { videos = [] } = await res.json();
  // Pexels has no location field; the page slug carries the uploader's title.
  const v = videos.find((x) => isMorocco(x.url) && /merzouga|sahara|desert|dune/i.test(x.url));
  if (!v) return console.warn('[media] No verifiably Moroccan Pexels video found; hero stays a still photo.');
  const files = v.video_files.filter((f) => f.file_type === 'video/mp4' && f.width >= 1280).sort((a, b) => a.width - b.width);
  const file = files.find((f) => f.width >= 1920) || files.at(-1);
  if (!file) return;
  media.heroVideo = {
    id: v.id,
    src: file.link,
    width: file.width,
    height: file.height,
    poster: v.image,
    videographer: v.user.name,
    videographerUrl: v.user.url,
    videoUrl: v.url,
    source: 'pexels',
  };
  console.log(`[media] hero video: ${v.user.name} — ${v.url}`);
}

async function main() {
  if (!UNSPLASH_KEY && !PEXELS_KEY) {
    const n = Object.keys(media.photos).length;
    console.warn(`[media] No UNSPLASH_ACCESS_KEY / PEXELS_API_KEY set — using ${n} cached photo(s); missing slots render as patterned panels.`);
    return;
  }
  if (UNSPLASH_KEY) await runUnsplash();
  if (PEXELS_KEY) await runPexels().catch((e) => console.warn(`[media] Pexels skipped: ${e.message}`));
  media.fetchedAt = new Date().toISOString();
  writeFileSync(OUT, JSON.stringify(media, null, 2) + '\n');
  writeFileSync(CACHE, JSON.stringify({ rejected: [...rejected] }, null, 2));
  const filled = SLOTS.filter((s) => media.photos[s.slot]).length;
  console.log(`[media] ${filled}/${SLOTS.length} photo slots filled.`);
}

main().catch((e) => {
  // Never fail the site build because of media lookups; the cached file still works.
  console.error(`[media] ${e.message}`);
});
