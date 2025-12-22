import Link from 'next/link';
import { FileText } from 'lucide-react';

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
                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/70 hover:text-white',
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{social.network}</span>
            </Link>
          );
        })}
      </div>

      <div className="hidden h-4 w-px bg-border sm:block"></div>
      <Button
        size="sm"
        className={cn('hidden sm:flex', isScrolled && 'bg-gray-900 text-white hover:bg-gray-800')}
        asChild
      >
        <Link href="/resume.pdf" target="_blank">
          <FileText className="mr-2 h-4 w-4" />
          Resume
        </Link>
      </Button>
    </div>
  );
}
