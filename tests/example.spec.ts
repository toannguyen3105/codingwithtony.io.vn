/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';
import { HomePage } from './pages/home.page';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.verifyTitle();
});
