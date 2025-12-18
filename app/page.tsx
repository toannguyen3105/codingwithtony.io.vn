import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { TechStack } from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
