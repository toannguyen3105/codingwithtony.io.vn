'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
// import { TypingAnimation } from '@/components/ui/typing-animation';
import config from '@/data/config.json';

export function Hero() {
  const { basics } = config;

  return (
    <section className="py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white/10 shadow-lg md:h-[160px] md:w-[160px]"
        >
          <Image
            src="https://placehold.co/400x400/png?text=Tony+Headshot"
            alt={basics.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {basics.name}
          </h1>
          {/* <TypingAnimation
            text={basics.name}
            className="text-4xl font-bold tracking-tight text-foreground md:text-6xl"
          /> */}
          <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            {basics.label}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            <Link href={`mailto:${basics.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {basics.location.city}, {basics.location.country}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
