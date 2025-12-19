'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/assets/3.webp"
          alt="Background Desktop"
          fill
          className="hidden object-cover sm:block"
          priority
        />
        <Image
          src="https://placehold.co/800x600/png?text=Mobile+BG"
          alt="Background Mobile"
          fill
          className="object-cover sm:hidden opacity-20"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background/20 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
      >
        <Sparkles className="h-4 w-4" />
        <span>AI-Powered Full Stack Generator</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl bg-linear-to-br from-white to-white/70 bg-clip-text text-transparent"
      >
        Think it. Type it. <br />
        Launch it.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 mt-6 max-w-2xl text-lg text-zinc-200 sm:text-xl"
      >
        Generate full-stack applications with a single prompt. Backend, frontend, and deployment
        ready in seconds.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 mt-10 w-full max-w-xl"
      >
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Describe your dream app..."
            className="h-14 w-full rounded-full border-2 border-primary/20 bg-background/50 px-6 py-4 text-lg shadow-lg backdrop-blur-xl focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button size="icon" className="absolute right-2 top-2 h-10 w-10 rounded-full">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Try: &quot;A portfolio website for a developer&quot; or &quot;An e-commerce store for
          sneakers&quot;
        </p>
      </motion.div>
    </section>
  );
}
