#!/usr/bin/env node
/**
 * Photo upgrade helper. Two steps, so a human chooses the best image:
 *
 *   node scripts/media-candidates.mjs search hero chefchaouen ...
 *     One search per slot; keeps the 8 best-liked high-resolution landscape
 *     results in scripts/.candidates.json (no detail requests yet).
 *
 *   node scripts/media-candidates.mjs pick hero=<photoId> chefchaouen=<photoId> ...
 *     Fetches each chosen photo, applies the same Morocco + place check as
 *     fetch-media.mjs, and writes it into src/data/media.json if it passes.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SLOTS, verify, toRecord } from './fetch-media.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src/data/media.json');
const CANDS = join(root, 'scripts/.candidates.json');
const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) throw new Error('UNSPLASH_ACCESS_KEY is not set');

// Sharper queries for the upgrade pass; fall back to the slot's own query.
const QUERIES = {
  hero: 'Erg Chebbi dunes Morocco',
  marrakech: 'Marrakech Morocco',
  chefchaouen: 'Chefchaouen',
  fes: 'Fes Morocco',
  atlas: 'High Atlas Morocco',
  essaouira: 'Essaouira',
  sahara: 'Merzouga camels',
  aitbenhaddou: 'Ait Ben Haddou',
  atlasValley: 'Atlas mountains village Morocco',
};

async function api(path) {
  const res = await fetch(`https://api.unsplash.com${path}`, { headers: { Authorization: `Client-ID ${KEY}`, 'Accept-Version': 'v1' } });
  const left = res.headers.get('x-ratelimit-remaining');
  if (!res.ok) throw new Error(`Unsplash ${res.status} on ${path} (remaining ${left})`);
  return { json: await res.json(), left };
}

const [cmd, ...args] = process.argv.slice(2);
const cands = existsSync(CANDS) ? JSON.parse(readFileSync(CANDS, 'utf8')) : {};

if (cmd === 'search') {
  for (const slot of args) {
    const def = SLOTS.find((s) => s.slot === slot);
    if (!def) { console.warn(`unknown slot ${slot}`); continue; }
    const q = encodeURIComponent(QUERIES[slot] ?? def.query);
    const { json, left } = await api(`/search/photos?query=${q}&per_page=30&orientation=landscape&content_filter=high`);
    cands[slot] = json.results
      .filter((p) => p.width >= 3000)
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 8)
      .map((p) => ({ id: p.id, likes: p.likes, w: p.width, h: p.height, thumb: p.urls.raw, by: p.user.name, alt: p.alt_description }));
    console.log(`${slot}: ${cands[slot].length} candidates (quota left ${left})`);
  }
  writeFileSync(CANDS, JSON.stringify(cands, null, 2));
} else if (cmd === 'pick') {
  const media = JSON.parse(readFileSync(OUT, 'utf8'));
  for (const arg of args) {
    const [slot, id] = arg.split('=');
    const def = SLOTS.find((s) => s.slot === slot);
    const { json: full, left } = await api(`/photos/${id}`);
    const v = verify(full, def.places);
    if (!v) { console.warn(`${slot}: ${id} REJECTED (location: ${JSON.stringify(full.location)})`); continue; }
    media.photos[slot] = toRecord(full, v);
    await api(`${new URL(full.links.download_location).pathname}${new URL(full.links.download_location).search}`).catch(() => {});
    console.log(`${slot}: ${id} by ${full.user.name}, ${v.where} (${v.by}) — quota left ${left}`);
  }
  writeFileSync(OUT, JSON.stringify(media, null, 2) + '\n');
} else {
  console.log('usage: media-candidates.mjs search <slot...> | pick <slot=id...>');
}
