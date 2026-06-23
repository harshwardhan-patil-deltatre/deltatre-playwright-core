import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly scheduleNavLink: Locator;
  readonly headerLogo: Locator

  constructor(page: Page) {
    this.page = page;
    this.scheduleNavLink = page.getByRole('link', { name: 'Schedule' });
    this.headerLogo = page.locator("//a[@title='Major League Soccer']");
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async navigateTo(url: string) {
    await this.navigate(url);
  }

  async navigateToSchedule() {
    await this.scheduleNavLink.click();
  }

  async isHeaderLogoVisible() {
    return await this.headerLogo.isVisible();
  }
}
