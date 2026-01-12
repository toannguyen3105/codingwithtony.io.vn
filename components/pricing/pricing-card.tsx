import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface PricingFeatureProps {
  text: string;
}

const PricingFeature = ({ text }: PricingFeatureProps) => (
  <li className="flex items-center gap-3">
    <Check className="h-5 w-5 shrink-0 text-primary" />
    <span className="text-muted-foreground">{text}</span>
  </li>
);

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8 transition-all hover:scale-[1.02]',
        isPopular
          ? 'border-primary bg-background shadow-2xl shadow-primary/10'
          : 'border-border bg-card/50 hover:bg-card/80',
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {price !== 'Free' && price !== 'Contact' && (
            <span className="text-muted-foreground">/project</span>
          )}
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature) => (
          <PricingFeature key={feature} text={feature} />
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={cn(
          'group inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          isPopular
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
        )}
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
