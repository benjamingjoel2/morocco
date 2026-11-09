// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical host for pages, the sitemap and robots.txt. SITE_URL overrides it.
const site = process.env.SITE_URL || 'https://azulmorocco.tourground.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  integrations: [
    // hreflang alternates in the sitemap: /page/ (en), /fr/page/, /de/page/, /es/page/
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr', de: 'de', es: 'es' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
});
