import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/landing.page';

test.describe('SP1-01: Foundation & Theme', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goto();
  });

  test('TC-01: should have correct default theme (dark mode)', async () => {
    await expect(landingPage.html).toHaveClass(/dark/);
  });

  test('TC-02: should apply Dark Mode background color', async () => {
    await expect(landingPage.body).toHaveCSS('background-color', landingPage.darkModeBgColor);
  });

  test('TC-03: should use Geist Sans font', async () => {
    await expect(landingPage.body).toHaveCSS('font-family', landingPage.fontPattern);
  });

  test('TC-04: should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(landingPage.pageTitle);
  });
});
