import { type Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  readonly pageTitle: RegExp = /Playwright/;

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    // Overriding navigate for specific home page URL if needed, or using base
    await this.navigate("https://playwright.dev/");
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }
}
