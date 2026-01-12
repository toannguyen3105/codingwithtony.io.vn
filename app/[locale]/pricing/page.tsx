import { FAQSection } from '@/components/pricing/faq-section';
import { PricingCard } from '@/components/pricing/pricing-card';

export default async function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your project needs. From quick fixes to full-scale
              application development.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container w-full px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Starter"
            price="$200"
            description="Perfect for small tasks, bug fixes, or consultation."
            features={[
              'Bug fixes & Troubleshooting',
              'Code Review & Optimization',
              '1 Component Usage',
              '24h Delivery',
              '1 Revision',
            ]}
          />
          <PricingCard
            title="Pro"
            price="$1,500"
            description="Complete frontend development for your web application."
            isPopular={true}
            ctaText="Start Project"
            features={[
              'Full React/Next.js App',
              'Responsive Design',
              'API Integration',
              'SEO Optimization',
              'Performance Tuning',
              '3 Revisions',
            ]}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="Dedicated support and long-term partnership."
            ctaText="Contact Sales"
            features={[
              'Everything in Pro',
              'Dedicated Priority Support',
              'Weekly Strategy Calls',
              'SLA Guarantee',
              'Custom Integrations',
              'Team Training',
            ]}
          />
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
