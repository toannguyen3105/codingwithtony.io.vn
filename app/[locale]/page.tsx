import { FaqSection } from '@/components/rocket/faq-section';
import { FeaturesSection } from '@/components/rocket/features-section';
import { FooterCta } from '@/components/rocket/footer-cta';
import { HeroSection } from '@/components/rocket/hero-section';
import { SocialProof } from '@/components/rocket/social-proof';
import { Testimonials } from '@/components/rocket/testimonials';
import { Footer } from '@/components/footer';
import { LoadingOverlay } from '@/components/loading-overlay';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LoadingOverlay />
      <main className="flex-1">
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <Testimonials />
        <FaqSection />
        <FooterCta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
