import { type Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async waitForUrl(url: RegExp | string) {
    await this.page.waitForURL(url);
  }
}
