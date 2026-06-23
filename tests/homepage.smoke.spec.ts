import { test, expect } from '@core/fixtures';
import { pageRoutes } from '@test-data/page-routes';

test.describe('Home page smoke tests', () => {
  test('Should navigate to header elements', {tag: '@smoke'}, async ({ homepage, page }) => {
    await test.step('Navigate to the homepage and verify header logo is visible', async () => {
      await homepage.navigate(pageRoutes.home);
      await expect(homepage.isHeaderLogoVisible()).resolves.toBeTruthy();
    });
    
    await test.step('Navigate to Schedule page via header link and verify URL', async () => {
      await homepage.navigateToSchedule();
      await expect(page).toHaveURL(pageRoutes.schedule)   
    });
  });
});