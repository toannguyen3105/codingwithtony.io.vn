'use client';

import { motion } from 'framer-motion';
import { FileText, FolderGit2, Github, Home, Linkedin, Menu, User, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import config from '@/data/config.json';
import { cn } from '@/lib/utils';

const icons = {
  Home: Home,
  Projects: FolderGit2,
  Skills: User, // Using User for Skills/About context slightly
  Contact: User, // Placeholder if needed
  GitHub: Github,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { navigation, basics, socials } = config;

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border sm:h-9 sm:w-9">
              <Image
                src="/assets/smartlogic-seal-teal-vector.svg"
                alt={basics.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden font-bold tracking-tight sm:inline-block">{basics.name}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? isScrolled
                    ? 'text-foreground'
                    : 'text-white'
                  : isScrolled
                    ? 'text-muted-foreground'
                    : 'text-white/70 hover:text-white',
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                  layoutId="navbar-indicator"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map((social) => {
              const Icon = icons[social.network as keyof typeof icons] || Github;
              return (
                <Link
                  key={social.network}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    'transition-colors hover:text-foreground',
                    isScrolled ? 'text-muted-foreground' : 'text-white/70 hover:text-white',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{social.network}</span>
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-border hidden sm:block"></div>

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

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'shrink-0 md:hidden',
                  isScrolled
                    ? 'text-foreground hover:text-foreground'
                    : 'text-white hover:text-white/80',
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
                    Home
                  </Link>
                  {navigation.map((item) => {
                    const iconKey = item.name as keyof typeof icons;
                    const Icon = icons[iconKey] || FolderGit2; // Default icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'flex items-center gap-2 text-lg font-medium',
                          pathname === item.href ? 'text-primary' : 'text-muted-foreground',
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Connect</h4>
                  <div className="flex gap-4">
                    {socials.map((social) => {
                      const Icon = icons[social.network as keyof typeof icons] || Github;
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
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
