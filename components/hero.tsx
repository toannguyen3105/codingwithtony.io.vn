'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
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
          className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-xl"
        >
          {/* Placeholder for avatar - using a gradient for now if no image is available, 
               or we could use a standard placeholder from a service. 
               For this demo, I'll use a standard placeholder or just a div color if 
               we want to avoid external dependencies, but next/image expects a slightly different setup.
               Let's assume there might be an avatar.png in public later, 
               but for now let's use a reliable placeholder service or a local asset if it existed.
               Since I can't check local assets easily without listing, I'll use a text fallback or a generic placeholder.
           */}
          <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-3xl font-bold dark:bg-zinc-800">
            {basics.name.charAt(0)}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-foreground">
            {basics.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">{basics.label}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full">
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
