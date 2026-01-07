'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
}: {
  name: string;
  role: string;
  content: string;
  avatar: string;
}) => (
  <div className="relative flex h-full w-[350px] flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
    <div className="mb-4 flex items-center gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
    <Quote className="absolute right-6 top-6 h-8 w-8 rotate-180 text-primary/10" />

    <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">&quot;{content}&quot;</p>

    <div className="flex items-center gap-4 mt-auto">
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
        <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" />
      </div>
      <div>
        <h4 className="font-semibold tracking-tight text-sm">{name}</h4>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      name: t('items.item0.name'),
      role: t('items.item0.role'),
      content: t('items.item0.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      name: t('items.item1.name'),
      role: t('items.item1.role'),
      content: t('items.item1.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
    {
      name: t('items.item2.name'),
      role: t('items.item2.role'),
      content: t('items.item2.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    },
    {
      name: t('items.item3.name'),
      role: t('items.item3.role'),
      content: t('items.item3.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
    {
      name: t('items.item4.name'),
      role: t('items.item4.role'),
      content: t('items.item4.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    },
    {
      name: t('items.item5.name'),
      role: t('items.item5.role'),
      content: t('items.item5.content'),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    },
  ];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
        >
          {t('description')}
        </motion.p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div
          className="group flex overflow-hidden p-2 flex-row w-full max-w-full"
          style={{ gap: '1rem' } as React.CSSProperties}
        >
          <div
            className="flex shrink-0 justify-around animate-marquee group-hover:paused flex-row"
            style={{ gap: '1rem' } as React.CSSProperties}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          <div
            className="flex shrink-0 justify-around animate-marquee group-hover:paused flex-row"
            style={{ gap: '1rem' } as React.CSSProperties}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={`clone-${i}`} {...testimonial} />
            ))}
          </div>
          <div
            className="flex shrink-0 justify-around animate-marquee group-hover:paused flex-row"
            style={{ gap: '1rem' } as React.CSSProperties}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={`clone-2-${i}`} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background dark:from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background dark:from-background to-transparent" />
      </div>
    </section>
  );
}
