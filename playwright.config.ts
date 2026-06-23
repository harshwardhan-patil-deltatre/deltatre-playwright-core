import { devices, PlaywrightTestConfig } from '@playwright/test';
import { environmentConfig } from './config/environments';

const baseConfig: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 2,
  use: {
    baseURL: environmentConfig.baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },

  projects: [
    {
      name: 'Chromium Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  timeout: 30000,
  reporter: [
    ['list'],
    [
      'html',
      {
        open: 'never',
      },
    ],
  ],
};

export default baseConfig;
