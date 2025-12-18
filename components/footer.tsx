import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

import config from '@/data/config.json';

export function Footer() {
  const { basics, socials } = config;

  const getIcon = (network: string) => {
    switch (network.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by {basics.name}. The source code is available on{' '}
            <a
              href={socials.find((s) => s.network === 'GitHub')?.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.network}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {getIcon(social.network)}
              <span className="sr-only">{social.network}</span>
            </Link>
          ))}
          <Link
            href={`mailto:${basics.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
