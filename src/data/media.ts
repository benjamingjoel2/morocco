import data from './media.json';

export interface PhotoRecord {
  id: string;
  src: string;
  width: number;
  height: number;
  color: string;
  alt: string;
  location: string;
  verifiedBy: string;
  photographer: string;
  photographerUrl: string;
  photoUrl: string;
  source: 'unsplash';
}

export interface VideoRecord {
  src: string;
  poster: string;
  videographer: string;
  videographerUrl: string;
  videoUrl: string;
  source: 'pexels';
}

const photos = (data as { photos: Record<string, PhotoRecord> }).photos;

/** Hand-written alt text, keyed by Unsplash photo id (checked by eye). */
const ALT: Record<string, string> = {
  'vB-4D0v66n4': 'Snow-covered peaks of the High Atlas above Tacheddirt',
  yA5rU4_WN3I: 'A car on the hairpin bends of the Dadès gorge road',
  _n9PLGmJq9Y: 'Piles of spices and dried rosebuds in a Marrakech souk',
  VdwtvEUj8HM: 'The earthen kasbah of Telouet above a green valley in the High Atlas',
  '18fvXEV1R_A': 'The minaret of the Hassan II Mosque in Casablanca',
  YJXrVIi_vd4: 'Hand-cut zellige tiles forming a many-pointed star pattern',
  bNqDGEqXiEg: 'A tanner working in the stone dye vats of a Fes tannery',
  XqGQCsiAjaI: 'A camel caravan crossing the vast dunes of the Erg Chebbi near Merzouga',
  NncAbldgViA: 'Blue-washed houses of Chefchaouen climbing the hillside under a clear sky',
  OQT24ujdL9M: 'Blue fishing boats moored in Essaouira harbour below the town walls',
  bnXUaEq9xYQ: 'Brass and glass lanterns glowing in a Marrakech souk',
  NhlKx6Uvm3E: 'Camel silhouettes against the sunset over the dunes near Merzouga',
  CJ_DC8Nd2Fk: 'Rooftops and minarets of the Fes medina at dusk',
  'pcbSQTQr2-I': 'The earthen ksar of Aït Benhaddou and the Ounila riverbed seen from above',
  q11NM0cFFzY: 'A kefta tagine with eggs on a zellige-tiled table',
  aqJfoLKFz6c: 'A whitewashed lane with blue doors and fishing boats above the beach in Taghazout',
  nhfQBX1V4no: 'Jemaa el-Fnaa at night, its food stalls glowing below the Koutoubia minaret',
  LzDtQIWBgoU: 'The marble courtyard and pool of the Ben Youssef Madrasa in Marrakech',
  AdlNESeAUg4: 'The Skala tower and harbour walls of Essaouira with blue fishing boats',
  '0gHcDpcYxOI': 'Musicians drumming around a fire at a desert camp near M’hamid',
  bAiPTY5xhbE: 'A Gnawa musician in a cowrie-shell cap playing the guembri in Marrakech',
  '5kPrgmo75yg': 'A carved stucco doorway beneath painted cedar eaves in a Marrakech courtyard',
  BZkui1Wkj8Y: 'The cobalt-blue villa of the Jardin Majorelle among cacti and palms',
};

export const getPhoto = (slot: string): PhotoRecord | undefined => {
  const p = photos[slot];
  return p && ALT[p.id] ? { ...p, alt: ALT[p.id] } : p;
};
export const allPhotos = (): [string, PhotoRecord][] => Object.entries(photos);
export const heroVideo = (data as { heroVideo: VideoRecord | null }).heroVideo;

/** Unsplash (imgix) URL at a given width and optional aspect ratio. */
export function unsplashUrl(src: string, w: number, ar?: string, q = w >= 1440 ? 74 : 64) {
  const u = new URL(src);
  u.searchParams.set('w', String(w));
  u.searchParams.set('q', String(q));
  u.searchParams.set('auto', 'format');
  u.searchParams.set('fit', 'crop');
  if (ar) u.searchParams.set('ar', ar.replace('/', ':'));
  return u.toString();
}
