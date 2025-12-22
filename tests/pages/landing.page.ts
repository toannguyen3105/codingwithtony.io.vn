import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LandingPage extends BasePage {
  readonly pageTitle: RegExp = /Tony Nguyen/i;
  readonly darkModeBgColor: string = 'lab(2.42796 -0.0840873 -4.13788)';
  readonly fontPattern: RegExp = /GeistSans|Geist Sans|sans-serif/;
  readonly html: Locator;
  readonly body: Locator;

  constructor(page: Page) {
    super(page);
    this.html = page.locator('html');
    this.body = page.locator('body');
  }

  async goto() {
    await this.navigate('/');
  }
}
