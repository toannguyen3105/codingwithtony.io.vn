'use client';

import { Marquee } from '@/components/ui/marquee';
import config from '@/data/config.json';

import { SectionHeader } from '@/components/section-header';

export function Skills() {
  const { skills } = config;

  return (
    <section className="py-20" id="skills">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Skills & Technologies"
          description="A glance at the technologies I work with."
        />

        <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {skills.map((skill) => (
              <div
                key={skill}
                className="mx-4 flex items-center justify-center rounded-md border bg-secondary/50 px-4 py-2 text-lg font-medium text-secondary-foreground"
              >
                {skill}
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
