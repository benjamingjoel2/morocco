import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '.';

export type Article = CollectionEntry<'journal'> & { slug: string; lang: Lang; minutes: number };

/** Articles in one language, newest first. Entry ids look like "fr/first-48-hours-in-marrakech". */
export async function articles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('journal', (e) => e.id.startsWith(`${lang}/`));
  return all
    .map((e) => ({
      ...e,
      lang,
      slug: e.id.split('/')[1],
      minutes: Math.max(1, Math.round((e.body ?? '').split(/\s+/).length / 220)),
    }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
