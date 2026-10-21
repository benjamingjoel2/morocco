import { test, expect, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Every page in the sitemap, so new pages are covered automatically.
const PAGES = [...readFileSync('dist/sitemap-0.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

/** Average brightness (0–1) of the 72px strip behind the header, with the header hidden. */
async function brightnessBehindHeader(page: Page) {
  await page.evaluate(() => (document.getElementById('site-header')!.style.visibility = 'hidden'));
  const width = page.viewportSize()!.width;
  const shot = await page.screenshot({ clip: { x: 0, y: 0, width, height: 72 } });
  await page.evaluate(() => (document.getElementById('site-header')!.style.visibility = ''));
  return page.evaluate(async (b64) => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let sum = 0, n = 0;
    for (let i = 0; i < d.length; i += 16) { sum += (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255; n++; }
    return sum / n;
  }, shot.toString('base64'));
}

test('sitemap lists every page', () => {
  expect(PAGES.length).toBeGreaterThanOrEqual(14);
});

for (const path of PAGES) {
  test.describe(path, () => {
    test('loads cleanly with SEO basics', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(String(e)));
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      const res = await page.goto(path, { waitUntil: 'networkidle' });
      expect(res?.status()).toBe(200);
      await expect(page).toHaveTitle(/Azul Morocco/);
      expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
      expect(await page.locator('meta[property="og:image"]').getAttribute('content')).toMatch(/^https:\/\//);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(errors).toEqual([]);
    });

    test('has no sideways scrolling', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    });

    test('header text stays legible while scrolling', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      const vh = page.viewportSize()!.height;
      for (const y of [0, 300, vh * 0.8, vh * 1.5, vh * 3]) {
        await page.evaluate((y) => window.scrollTo(0, y), y);
        await page.waitForTimeout(400);
        const white = await page.evaluate(() => getComputedStyle(document.getElementById('site-header')!).color === 'rgb(255, 255, 255)');
        if (white) expect(await brightnessBehindHeader(page), `white header on light background at y=${y}`).toBeLessThan(0.6);
      }
    });

    test('every image loads', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      const h = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < h; y += 600) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(80); }
      // Scroll sideways rails too, then wait for lazy images
      await page.evaluate(() => document.querySelectorAll<HTMLElement>('.rail').forEach((r) => r.scrollTo(r.scrollWidth, 0)));
      // Low-priority lazy images may arrive a moment later; wait for them, but fail if they never do
      await expect
        .poll(
          () =>
            page.evaluate(() =>
              [...document.images]
                // Skip images not displayed at this screen size, in the closed menu, or in slides not yet shown
                .filter((i) => i.getClientRects().length > 0 && i.offsetParent !== null)
                .filter((i) => !i.closest('#site-menu') && !i.closest('.hero-slide.opacity-0'))
                .filter((i) => !(i.complete && i.naturalWidth > 0))
                .map((i) => i.alt || i.currentSrc),
            ),
          { timeout: 15_000 },
        )
        .toEqual([]);
    });
  });
}

test('pages with a photo header actually render it', async ({ page }) => {
  for (const path of PAGES.filter((p) => !['/contact/'].includes(p))) {
    await page.goto(path);
    await expect(page.locator('main > section').first().locator('img').first(), `photo header on ${path}`).toBeVisible();
  }
});

test('internal links resolve', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of PAGES) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href^="/"]', (as) => as.map((a) => a.getAttribute('href')!));
    hrefs.forEach((h) => seen.add(h.split('#')[0]));
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});
