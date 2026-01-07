import config from '@/data/config.json';
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

    // Branding
    const logoLink = header.locator('a[href="/"]');
    this.logo = logoLink;
    this.logoImage = logoLink.locator('img');
    this.title = logoLink.locator('span').filter({ hasText: config.basics.name });

    // Navigation
    this.desktopNav = header.locator('nav').or(header.locator('.hidden.md\\:block'));

    // Mobile Menu
    this.mobileMenuBtn = header.locator('button').filter({ hasText: 'Toggle menu' });
    this.mobileNav = page.locator('div[role="dialog"]');

    // Dropdowns
    // Note: 'Resources' label comes from i18n/en.json.
    // Ideally we should read from en.json, but for now assuming default English locale for tests.
    this.resourcesTrigger = this.desktopNav.getByRole('button', { name: 'Resources' });
    this.resourcesDropdown = page.getByRole('list').filter({ hasText: 'Blog' });
  }

  async scrollToTriggerStyleChange() {
    await this.page.evaluate(() => {
      document.body.style.minHeight = '3000px';
      window.scrollTo(0, 200);
    });
    // Wait for the scroll to actually take effect in the browser
    await this.page.waitForFunction(() => window.scrollY > 50);
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
