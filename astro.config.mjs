// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL can be set in Vercel once a custom domain exists.
const site = process.env.SITE_URL || 'https://morocco.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
