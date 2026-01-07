'use client';

import { Github, Linkedin, Youtube, Mail, Twitter, Send } from 'lucide-react';
import Link from 'next/link';

import config from '@/data/config.json';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
      case 'twitter':
      case 'x':
        return <Twitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const footerLinks = {
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Courses', href: '/courses' },
      { name: 'Mentorship', href: '/mentorship' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Coding with</span> Tony
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Master modern web development with practical, project-based learning. From zero to
              senior engineer.
            </p>
            <div className="flex gap-4 mt-2">
              {socials.map((social) => (
                <Link
                  key={social.network}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.network}
                >
                  {getIcon(social.network)}
                </Link>
              ))}
              <Link
                href={`mailto:${basics.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Resources</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.resources.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest tutorials, tips, and course updates delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
                aria-label="Email address"
              />
              <Button type="submit" size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 md:mt-16 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {basics.name}. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
