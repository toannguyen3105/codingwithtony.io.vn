'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DesktopNav, HeaderActions, MobileNav } from '@/components/header';
import config from '@/data/config.json';
import { cn } from '@/lib';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { basics } = config;

  return (
    <header
      className={cn(
        'fixed z-50 w-full transition-all duration-300',
        isScrolled
          ? 'top-0 border-b border-gray-200/50 bg-white/80 text-gray-900 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60'
          : 'top-6 bg-transparent text-white',
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border sm:h-9 sm:w-9">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="hidden font-bold tracking-tight sm:inline-block">{basics.name}</span>
          </Link>
        </div>

        <DesktopNav isScrolled={isScrolled} />

        <div className="flex items-center gap-2 sm:gap-4">
          <HeaderActions isScrolled={isScrolled} />
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
}
