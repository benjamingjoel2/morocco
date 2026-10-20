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

export const getPhoto = (slot: string): PhotoRecord | undefined => photos[slot];
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
