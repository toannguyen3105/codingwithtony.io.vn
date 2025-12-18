'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import config from '@/data/config.json';

export function Experience() {
  const { work } = config;

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            My professional journey and key achievements in the tech industry.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl border-l border-muted/50 pl-8 ml-4 md:ml-auto">
          {work.map((job, index) => (
            <motion.div
              key={`${job.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-background ring-4 ring-muted">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold">{job.position}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">{job.company}</span>
              </div>

              <p className="mb-4 text-muted-foreground">{job.summary}</p>

              <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
