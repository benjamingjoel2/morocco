import type { APIRoute } from 'astro';

// Built from the `site` setting in astro.config.mjs (SITE_URL), so the
// Sitemap line always points at the canonical host.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
