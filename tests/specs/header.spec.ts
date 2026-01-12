import { test, expect } from '@playwright/test';
import { HeaderComponent } from '../pages/components/header.component';
import { LandingPage } from '../pages/landing.page';

test.describe('SP2-01: Header & Navigation', () => {
  let header: HeaderComponent;
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    header = new HeaderComponent(page);
    await landingPage.goto();
  });

  test('TC-Header-01: Should display correct branding', async () => {
    await expect(header.logo).toBeVisible();
    await expect(header.logoImage).toBeVisible();
    await expect(header.logoImage).toHaveAttribute('src', /logo\.svg/);
    await expect(header.logoImage).toHaveAttribute('alt', 'Logo');

    await expect(header.title).toBeVisible();
  });

  test('TC-Header-02: Should handle scroll behavior correctly', async () => {
    const headerEl = header['page'].locator('header');

    await expect(headerEl).toHaveClass(/top-6/);
    await expect(headerEl).not.toHaveClass(/top-0/);

    await header.scrollToTriggerStyleChange();

    await expect(headerEl).toHaveClass(/top-0/);
    await expect(headerEl).not.toHaveClass(/top-6/);
  });

  test('TC-Header-03: Should verify Desktop layout', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    const desktopNavDiv = page.locator('header .hidden.md\\:block');
    await expect(desktopNavDiv).toBeVisible();

    await expect(header.mobileMenuBtn).toBeHidden();
  });

  test('TC-Header-04: Should verify Mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const desktopNavDiv = page.locator('header .hidden.md\\:block');
    await expect(desktopNavDiv).toBeHidden();

    await expect(header.mobileMenuBtn).toBeVisible();

    await header.mobileMenuBtn.click();
    await expect(header.mobileNav).toBeVisible();

    await expect(header.mobileNav.locator('text=Tony Nguyen')).toBeVisible();
  });

  test('TC-Header-05: Should open Resources dropdown', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    await expect(header.resourcesTrigger).toBeVisible();

    await header.resourcesTrigger.hover();

    await expect(header.resourcesDropdown).toBeVisible();
    await expect(header.resourcesDropdown).toContainText('Blog');
    await expect(header.resourcesDropdown).toContainText('Tutorials');
  });
});
