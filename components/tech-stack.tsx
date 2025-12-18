'use client';

import { motion } from 'framer-motion';

import config from '@/data/config.json';
import { Badge } from '@/components/ui/badge';

export function TechStack() {
  const { skills } = config;

  // If there are no skills, don't render the section
  if (!skills || skills.length === 0) {
    return null;
  }

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tech Stack
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My preferred tools and technologies for building modern applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-base font-normal hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
