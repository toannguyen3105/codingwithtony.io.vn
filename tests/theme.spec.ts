/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';
import { LandingPage } from './pages/landing.page';

test.describe('SP1-01: Foundation & Theme', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goto();
  });

  test('TC-01: should have correct default theme (light mode)', async () => {
    await landingPage.verifyHtmlTheme('light');
  });

  test('TC-02: should apply Light Mode background color', async () => {
    await landingPage.verifyBodyBackgroundColor();
  });

  test('TC-03: should use Geist Sans font', async () => {
    await landingPage.verifyFont();
  });

  test('TC-04: should have correct title', async () => {
    await landingPage.verifyTitle();
  });
});
