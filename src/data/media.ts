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
  VuZq_P8gdGU: 'Wind-sculpted dunes of the Moroccan Sahara under a soft evening sky',
  kQvG19PcFGY: 'Flat rooftops of the Marrakech medina at sunset',
  s1qvaSQxTqM: 'Blue and white houses of Chefchaouen climbing the Rif hillside',
  'Ig-7mRL4i6Q': 'Two people walking through an arched lane in the Fes medina',
  VP2mjtJqWvY: 'Camels resting beside a man in a blue robe on the dunes near Merzouga',
  'vB-4D0v66n4': 'Snow-covered peaks of the High Atlas above Tacheddirt',
  C14HO99b8Lo: 'Blue fishing boats packed into Essaouira harbour',
  vQBzESXYCnE: 'The earthen ksar of Aït Benhaddou at dusk above a palm grove',
  'gOLYl-y6hMQ': 'Rooftops and a minaret in Taghazout above the Atlantic',
  yA5rU4_WN3I: 'A car on the hairpin bends of the Dadès gorge road',
  _n9PLGmJq9Y: 'Piles of spices and dried rosebuds in a Marrakech souk',
  _V4v7BbG338: 'A Moroccan table laid with tagines and colourful dishes',
  wXbgEYQTzxY: 'Jemaa el-Fnaa square and its stalls at dusk, Marrakech',
  AGYIFWzTm1I: 'Visitors in the carved stucco courtyard of the Ben Youssef Madrasa, Marrakech',
};

export const getPhoto = (slot: string): PhotoRecord | undefined => {
  const p = photos[slot];
  return p && ALT[p.id] ? { ...p, alt: ALT[p.id] } : p;
};
export const allPhotos = (): [string, PhotoRecord][] => Object.entries(photos);
export const heroVideo = (data as { heroVideo: VideoRecord | null }).heroVideo;

/** Unsplash (imgix) URL at a given width and optional aspect ratio. */
export function unsplashUrl(src: string, w: number, ar?: string, q = 70) {
  const u = new URL(src);
  u.searchParams.set('w', String(w));
  u.searchParams.set('q', String(q));
  u.searchParams.set('auto', 'format');
  u.searchParams.set('fit', 'crop');
  if (ar) u.searchParams.set('ar', ar.replace('/', ':'));
  return u.toString();
}
