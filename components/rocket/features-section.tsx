'use client';

import { motion, useInView } from 'framer-motion';
import { Code2, Users, Zap, BookOpen, Trophy, Rocket, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  const t = useTranslations('Features.cards');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </motion.div>
  );
};

export function FeaturesSection() {
  const t = useTranslations('Features');
  const CARDS_START_DELAY = 0.4;

  const features = [
    {
      icon: Code2,
      title: t('cards.modernStack.title'),
      description: t('cards.modernStack.description'),
    },
    {
      icon: Users,
      title: t('cards.community.title'),
      description: t('cards.community.description'),
    },
    {
      icon: Trophy,
      title: t('cards.career.title'),
      description: t('cards.career.description'),
    },
    {
      icon: BookOpen,
      title: t('cards.courses.title'),
      description: t('cards.courses.description'),
    },
    {
      icon: Zap,
      title: t('cards.performance.title'),
      description: t('cards.performance.description'),
    },
    {
      icon: Rocket,
      title: t('cards.projects.title'),
      description: t('cards.projects.description'),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            {t('badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={CARDS_START_DELAY + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
