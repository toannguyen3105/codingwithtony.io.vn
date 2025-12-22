'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Home, Menu, FileText, FolderGit2 } from 'lucide-react'; // Import necessary icons, verify against icons.ts usage
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import config from '@/data/config.json';
import { cn } from '@/lib/utils';
import { icons, IconKey } from './icons';

interface MobileNavProps {
  isScrolled: boolean;
}

export function MobileNav({ isScrolled }: MobileNavProps) {
  const t = useTranslations('Nav');
  const { navigation, basics, socials } = config;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'shrink-0 md:hidden',
            isScrolled ? 'text-foreground hover:text-foreground' : 'text-white hover:text-white/80',
          )}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader className="px-4 text-left">
          <SheetTitle className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border">
              <Image
                src="/assets/smartlogic-seal-teal-vector.svg"
                alt={basics.name}
                fill
                className="object-cover"
              />
            </div>
            <span>{basics.name}</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-6 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-lg font-medium"
            >
              <Home className="h-5 w-5" />
              {t('home')}
            </Link>
            {navigation.map((item) => {
              const iconKey = item.name as IconKey;
              const Icon = icons[iconKey] || FolderGit2; // Default icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  {t(item.name.toLowerCase())}
                </Link>
              );
            })}
            {/* Mobile Resources - simplified */}
            <div className="py-2">
              <h4 className="mb-2 text-sm font-semibold text-muted-foreground">{t('resources')}</h4>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground"
              >
                {t('blog')}
              </Link>
              <Link
                href="/tutorials"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground"
              >
                {t('tutorials')}
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="mb-4 text-sm font-semibold text-muted-foreground">{t('connect')}</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = icons[social.network as IconKey] || icons.GitHub;
                return (
                  <Link
                    key={social.network}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-md border bg-background p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.network}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4">
              <Button className="w-full" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  {t('downloadResume')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
