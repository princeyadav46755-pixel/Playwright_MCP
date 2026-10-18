import { defineConfig, devices } from '@playwright/test';
import { environment } from './enviroment';

export default defineConfig({
  testDir: './tests',
  
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
   retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
   workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
 
  use: {
     headless:false,
    
     baseURL:environment.baseUrl,
    
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

   
  ],

  
});
