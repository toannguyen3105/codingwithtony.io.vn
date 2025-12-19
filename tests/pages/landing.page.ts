import { type Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LandingPage extends BasePage {
  readonly pageTitle: RegExp = /Tony Nguyen/i;
  // Browser returns lab(100 0 0) for white in this environment
  readonly lightModeBgColor: string = 'lab(100 0 0)';
  readonly fontPattern: RegExp = /GeistSans|Geist Sans|sans-serif/;

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.navigate('/');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async verifyHtmlTheme(theme: string) {
    const html = this.page.locator('html');
    await expect(html).toHaveClass(new RegExp(theme));
  }

  async verifyBodyBackgroundColor() {
    const body = this.page.locator('body');
    await expect(body).toHaveCSS('background-color', this.lightModeBgColor);
  }

  async verifyFont() {
    const body = this.page.locator('body');
    await expect(body).toHaveCSS('font-family', this.fontPattern);
  }
}
