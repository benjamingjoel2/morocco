// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL can be set in Vercel once a custom domain exists.
const site = process.env.SITE_URL || 'https://morocco-liart.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  integrations: [
    // hreflang pairs in the sitemap: /page/ (en) <-> /fr/page/ (fr)
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
});
