import { type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base.page';

export class HeaderComponent extends BasePage {
  readonly logo: Locator;
  readonly logoImage: Locator;
  readonly title: Locator;
  readonly desktopNav: Locator;
  readonly mobileMenuBtn: Locator;
  readonly mobileNav: Locator;
  readonly resourcesTrigger: Locator;
  readonly resourcesDropdown: Locator;

  constructor(page: Page) {
    super(page);
    const header = page.locator('header');

    this.logo = header.locator('a[href="/"]');
    this.logoImage = this.logo.locator('img');
    this.title = this.logo.locator('span').filter({ hasText: 'Tony Nguyen' });

    this.desktopNav = header.locator('nav').or(header.locator('.hidden.md\\:block'));

    this.mobileMenuBtn = header.locator('button').filter({ hasText: 'Toggle menu' });
    this.mobileNav = page.locator('div[role="dialog"]');

    this.resourcesTrigger = this.desktopNav.getByRole('button', { name: 'Resources' });
    this.resourcesDropdown = page.getByRole('list').filter({ hasText: 'Blog' });
  }

  async scrollToTriggerStyleChange() {
    await this.page.evaluate(() => window.scrollTo(0, 100));
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
