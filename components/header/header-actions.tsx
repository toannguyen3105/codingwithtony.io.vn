import Link from 'next/link';
import { FileText } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import config from '@/data/config.json';
import { cn } from '@/lib/utils';
import { icons, IconKey } from './icons';

interface HeaderActionsProps {
  isScrolled: boolean;
}

export function HeaderActions({ isScrolled }: HeaderActionsProps) {
  const { socials } = config;

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="hidden items-center gap-2 sm:flex">
        {socials.map((social) => {
          const Icon = icons[social.network as IconKey] || icons.GitHub;
          return (
            <Link
              key={social.network}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'transition-colors hover:text-foreground',
                'text-white/70 hover:text-white', // Consistent styling
                isScrolled && 'text-muted-foreground',
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{social.network}</span>
            </Link>
          );
        })}
      </div>

      <div className="hidden h-4 w-px bg-border sm:block"></div>

      {/* Theme Toggle */}
      <ThemeToggle
        className={cn(
          'transition-colors hover:text-foreground',
          isScrolled ? 'text-muted-foreground' : 'text-white/70 hover:text-white',
        )}
      />

      <Button size="sm" className="hidden sm:flex" asChild>
        <Link href="/resume.pdf" target="_blank">
          <FileText className="mr-2 h-4 w-4" />
          Resume
        </Link>
      </Button>
    </div>
  );
}
