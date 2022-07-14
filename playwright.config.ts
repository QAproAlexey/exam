import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalTimeout: 480000,
  timeout: 60000,
  retries: 1,
  reporter: 'list',
  testDir: './tests',
  outputDir: './test-results',
  expect: {
    timeout: 10000
    },
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    viewport: { width: 1400, height: 700 },
    headless: false,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
};

export default config;
