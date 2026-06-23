import { Page } from '@playwright/test';

/**
 * Wait for network to be idle (no pending network requests)
 * @param page - Playwright Page object
 * @returns Promise that resolves when network is idle
 */
export async function waitForNetworkIdle(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle');
}

/**
 * Wait for a selector to be visible on the page
 * @param page - Playwright Page object
 * @param selector - CSS selector or Playwright locator
 * @param timeout - Optional timeout in milliseconds (default: 30000)
 * @returns Promise that resolves when selector is visible
 */
export async function waitForSelector(
  page: Page,
  selector: string,
  timeout: number = 30000
): Promise<void> {
  await page.locator(selector).waitFor({ state: 'visible', timeout });
}
