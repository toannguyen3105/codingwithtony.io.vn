import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { LoadingOverlay } from '@/components/loading-overlay';
import { Projects } from '@/components/projects';
import { ScrollToTop } from '@/components/scroll-to-top';
import { SkillNetwork } from '@/components/skill-network';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LoadingOverlay />
      <main className="flex-1">
        <Hero />
        <Skills />
        <SkillNetwork />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
