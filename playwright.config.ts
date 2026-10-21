import { defineConfig, devices } from '@playwright/test';

// `npm run qa` builds the site, serves it, and runs these checks in a real browser.
export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:4322' },
  webServer: { command: 'node scripts/serve-dist.mjs 4322', url: 'http://localhost:4322', reuseExistingServer: false },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
