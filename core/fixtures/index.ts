import { test as base, expect } from '@playwright/test';
import { HomePage } from '@pages/home-page';

type FrameworkFixtures = {
	homepage: HomePage;
};

/**
 * Extended test object with custom fixtures and configurations
 *
 * IMPORTANT: All product tests must import test from here, never directly from @playwright/test
 * This ensures consistency and allows for centralized fixture management across the test suite.
 */
export const test = base.extend<FrameworkFixtures>({
	homepage: async ({ page }, use) => {
		await use(new HomePage(page));
	},
});

export { expect };
