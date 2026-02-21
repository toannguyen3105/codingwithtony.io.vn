'use client';

import { useTranslations } from 'next-intl';
import React, { memo } from 'react';

import { Link, usePathname } from '@/i18n/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import config from '@/data/config.json';
import { cn } from '@/lib';

interface DesktopNavProps {
  isScrolled: boolean;
}

// Vercel Best Practice: `rerender-memo` - Extracting expensive static UI block that doesn't depend on `isScrolled` state
const NavDropdownItems = memo(function NavDropdownItems({
  items,
}: {
  items: { name: string; href: string; description?: string; key?: string }[];
}) {
  const t = useTranslations('Nav');

  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {items.map((subItem) => (
        <ListItem
          key={subItem.href}
          href={subItem.href as string}
          title={t((subItem.key || subItem.name.toLowerCase()) as Parameters<typeof t>[0])}
        >
          {subItem.description ? t(subItem.description as Parameters<typeof t>[0]) : null}
        </ListItem>
      ))}
    </ul>
  );
});

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const { navigation } = config;

  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
      <NavigationMenu
        className={cn('transition-colors', isScrolled ? 'text-gray-900' : 'text-white')}
      >
        <NavigationMenuList>
          {navigation.map((item) => {
            const navItem = item as {
              name: string;
              href?: string;
              key?: string;
              items?: { name: string; href: string; description?: string; key?: string }[];
            };
            const itemKey = navItem.key || navItem.name.toLowerCase();

            if (navItem.items) {
              return (
                <NavigationMenuItem key={navItem.name}>
                  <NavigationMenuTrigger
                    className={cn(
                      'h-9 bg-transparent',
                      isScrolled
                        ? 'hover:bg-black/5 focus:bg-black/5 data-[state=open]:bg-black/5 text-gray-900'
                        : 'hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10',
                    )}
                  >
                    {t(itemKey as Parameters<typeof t>[0])}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavDropdownItems items={navItem.items} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={navItem.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={navItem.href as string}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'h-9 bg-transparent',
                      isScrolled
                        ? 'hover:bg-black/5 focus:bg-black/5 data-active:bg-black/5 text-gray-900'
                        : 'hover:bg-white/10 focus:bg-white/10 data-active:bg-white/10',
                      pathname === navItem.href && (isScrolled ? 'text-blue-600' : 'text-primary'),
                    )}
                  >
                    {t(itemKey as Parameters<typeof t>[0])}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          href={href as string}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = 'ListItem';
