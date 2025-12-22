'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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
import { cn } from '@/lib/utils';

interface DesktopNavProps {
  isScrolled: boolean;
}

export function DesktopNav({ isScrolled }: DesktopNavProps) {
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
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {/* Resources Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 h-9">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/blog" title="Blog">
                  Articles about web development, React, and software engineering.
                </ListItem>
                <ListItem href="/tutorials" title="Tutorials">
                  Step-by-step guides to building full-stack applications.
                </ListItem>
                <ListItem href="/newsletter" title="Newsletter">
                  Weekly updates on the latest tech trends and coding tips.
                </ListItem>
                <ListItem href="/case-studies" title="Case Studies">
                  Deep dives into real-world project architectures.
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
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
