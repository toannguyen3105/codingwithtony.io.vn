'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import config from '@/data/config.json';

import { SectionHeader } from '@/components/section-header';

export function Projects() {
  const { projects } = config;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Featured Projects"
          description="Check out some of the recent projects I've worked on."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href={config.socials.find((s) => s.network === 'GitHub')?.url || '#'}
            target="_blank"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="mr-2 h-5 w-5" />
            View more on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
