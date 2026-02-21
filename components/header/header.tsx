'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DesktopNav, HeaderActions, MobileNav } from '@/components/header';
import config from '@/data/config.json';
import { cn } from '@/lib';

const AnimatedLogo = (
  <div className="relative h-full w-full">
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full object-contain"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3BBDB1" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      <rect width="256" height="256" rx="64" fill="url(#logo-grad)" />
    </svg>

    {/* Left bracket < */}
    <motion.div
      className="absolute inset-0"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'center' }}
    >
      <svg viewBox="0 0 256 256" className="h-full w-full">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          d="M 76 96 L 44 128 L 76 160"
          fill="none"
          stroke="#ffffff"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>

    {/* Right bracket > */}
    <motion.div
      className="absolute inset-0"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      style={{ transformOrigin: 'center' }}
    >
      <svg viewBox="0 0 256 256" className="h-full w-full">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          d="M 180 96 L 212 128 L 180 160"
          fill="none"
          stroke="#ffffff"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>

    {/* Letter T */}
    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'center' }}
    >
      <svg viewBox="0 0 256 256" className="h-full w-full">
        <motion.path
          initial={{ pathLength: 0, strokeWidth: 14 }}
          animate={{ pathLength: 1, strokeWidth: [14, 20, 14] }}
          transition={{
            pathLength: { duration: 2, ease: 'easeOut' },
            strokeWidth: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          d="M 104 96 L 152 96 M 128 96 L 128 160"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  </div>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
              {AnimatedLogo}
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
