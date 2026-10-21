import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Journal articles: src/content/journal/<lang>/<slug>.md, same slug in every language. */
const journal = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    photo: z.string(),
    tag: z.string(),
  }),
});

export const collections = { journal };
