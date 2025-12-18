import { test, expect } from '@playwright/test';

test.describe('SP1-01: Foundation & Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should force dark mode on html tag', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
  });

  test('should apply Deep Space background color', async ({ page }) => {
    const body = page.locator('body');

    const expectedColor = 'lab(2.42796 -0.0840873 -4.13788)';

    await expect(body).toHaveCSS('background-color', expectedColor);
  });

  test('should use Geist Sans font', async ({ page }) => {
    const body = page.locator('body');
    await expect(body).toHaveCSS('font-family', /GeistSans|Geist Sans|sans-serif/);
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Coding with Tony/i);
  });
});
