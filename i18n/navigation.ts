import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;
export const defaultLocale = 'en';
export const localePrefix = 'as-needed'; // Default

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});
