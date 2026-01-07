'use client';

import { motion } from 'framer-motion';
import {
  ArrowUp,
  Atom,
  Braces,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  Paperclip,
  ShoppingBag,
  Terminal,
  Zap,
  Cloud,
  Server,
  Box,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/typing-text';

export function HeroSection() {
  const t = useTranslations('Hero');
  const [inputValue, setInputValue] = useState('');

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/assets/background_01.webp"
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
        className="relative z-10 mb-6"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-white/20 cursor-default">
          <Zap className="h-4 w-4" />
          <span>{t('badge')}</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-linear-to-br from-white to-white/70 bg-clip-text text-transparent"
      >
        {t('title')}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 mt-6 max-w-2xl text-lg text-zinc-200 sm:text-xl"
      >
        {t('descriptionPrefix')} <TypingText words={t.raw('descriptionSuffixes') as string[]} />
      </motion.div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 mt-10 w-full max-w-2xl"
      >
        <div className="relative flex flex-col rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl transition-all focus-within:border-primary/50 focus-within:bg-black/60">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t('placeholder')}
            className="min-h-[120px] w-full resize-none bg-transparent px-6 py-5 text-lg text-white placeholder:text-zinc-400 focus:outline-none"
          />
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 cursor-pointer text-zinc-400 hover:bg-white/10 hover:text-white"
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 cursor-pointer gap-2 rounded-full border border-white/10 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Layers className="h-4 w-4" />
                {t('import')}
              </Button>
            </div>
            <Button
              size="icon"
              disabled={!inputValue.trim()}
              className="h-9 w-9 cursor-pointer rounded-lg bg-white text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 mt-8 hidden w-full max-w-2xl md:block"
      >
        <div className="flex w-full items-center justify-between gap-12 rounded-lg border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-md">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[10px] font-bold text-zinc-100 uppercase tracking-widest">
              {t('frameworks')}
            </span>
            <div className="flex gap-4 text-zinc-300">
              <Atom className="h-6 w-6 text-blue-400" />
              <Zap className="h-6 w-6 text-white" />
              <ShoppingBag className="h-6 w-6 text-green-400" />
              <Palette className="h-6 w-6 text-pink-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-[10px] font-bold text-zinc-100 uppercase tracking-widest">
              {t('languages')}
            </span>
            <div className="flex gap-4 text-zinc-300">
              <Code className="h-6 w-6 text-blue-400" />
              <Terminal className="h-6 w-6 text-yellow-400" />
              <Braces className="h-6 w-6 text-cyan-400" />
              <Database className="h-6 w-6 text-orange-400" />
              <Cpu className="h-6 w-6 text-red-400" />
              <Globe className="h-6 w-6 text-purple-400" />
              <Cloud className="h-6 w-6 text-sky-400" />
              <Server className="h-6 w-6 text-indigo-400" />
              <Box className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
