'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

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

export function DesktopNav({ isScrolled }: DesktopNavProps) {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const { navigation } = config;

  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
      <NavigationMenu
        className={cn(
          'rounded-lg border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md transition-all',
          isScrolled && 'bg-background/80 border-border/40',
        )}
      >
        <NavigationMenuList>
          {navigation.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent hover:bg-white/10 focus:bg-white/10 data-active:bg-white/10 h-9',
                    pathname === item.href && 'text-primary',
                  )}
                >
                  {t(item.name.toLowerCase())}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {/* Resources Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 h-9">
              {t('resources')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/blog" title={t('blog')}>
                  {t('blogDesc')}
                </ListItem>
                <ListItem href="/tutorials" title={t('tutorials')}>
                  {t('tutorialsDesc')}
                </ListItem>
                <ListItem href="/newsletter" title={t('newsletter')}>
                  {t('newsletterDesc')}
                </ListItem>
                <ListItem href="/case-studies" title={t('caseStudies')}>
                  {t('caseStudiesDesc')}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
            href={props.href as string}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
