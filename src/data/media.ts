import data from './media.json';
import { ALT_I18N } from './media-alt';

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
  'knB5iCogf5Q': 'The ksar of Aït Benhaddou above palms and the dry Ounila riverbed',
  'erg9zCloOgs': 'An earth-walled village on a terraced slope near Imlil in the High Atlas',
  'REPFlPjU7ec': 'A hiker facing snow-streaked peaks in the M’Goun massif of the High Atlas',
  'JibMa0FbyHw': 'Blue-washed steps lined with flowerpots in a lane of Chefchaouen',
  'iRHsQi8PtAs': 'Cobalt pots of agave and lilies against a blue wall in Chefchaouen',
  '1e8ddYXq2hw': 'A stone gateway with twin turrets on the ramparts of Essaouira',
  'bKPTbZe-P2k': 'Café tables in a sunlit pedestrian street of the Essaouira medina',
  'Ig-7mRL4i6Q': 'Two people walking through an arched lane in the Fes medina',
  'zbPDL84kvRg': 'Rows of colourful leather babouche slippers in a Marrakech souk',
  'FF4pENw-PBA': 'A wall of hand-painted ceramic plates for sale in Marrakech',
  'kiYzznir-uo': 'A camel caravan crossing orange dunes under a deep blue sky near Merzouga',
  'sM0MKub2W2I': 'Riders on a camel trek across the golden dunes of Merzouga',
  'wt-e4JiP8eY': 'Surfers and footballers on the long beach at Taghazout',
  '57W456Hxmng': 'A camel resting on the sand while people play on Taghazout beach',
};

/** Photo for a slot, with alt text in the requested language (English by default). */
export const getPhoto = (slot: string, lang: 'en' | 'fr' | 'de' | 'es' = 'en'): PhotoRecord | undefined => {
  const p = photos[slot];
  if (!p) return p;
  const alt = (lang !== 'en' && ALT_I18N[lang][p.id]) || ALT[p.id];
  return alt ? { ...p, alt } : p;
};
export const allPhotos = (): [string, PhotoRecord][] => Object.entries(photos);
export const heroVideo = (data as { heroVideo: VideoRecord | null }).heroVideo;

/** Unsplash (imgix) URL at a given width and optional aspect ratio. */
export function unsplashUrl(src: string, w: number, ar?: string, quality?: number) {
  const q = quality ?? (w >= 1440 ? 72 : 60);
  const u = new URL(src);
  u.searchParams.set('w', String(w));
  u.searchParams.set('q', String(q));
  u.searchParams.set('auto', 'format');
  u.searchParams.set('fit', 'crop');
  if (ar) u.searchParams.set('ar', ar.replace('/', ':'));
  return u.toString();
}
