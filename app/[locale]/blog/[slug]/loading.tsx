import { ArrowLeftIcon } from 'lucide-react';

export default function BlogPostLoadingSkeleton() {
  return (
    <article className="container mx-auto max-w-4xl px-4 py-32 md:py-40">
      <div className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="h-4 w-24 animate-pulse rounded bg-muted" />
      </div>

      <header className="mb-12 space-y-8 text-center sm:mb-16">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />
        </div>

        <div className="mx-auto h-12 w-3/4 animate-pulse rounded-lg bg-muted sm:h-16" />
        <div className="mx-auto h-12 w-2/4 animate-pulse rounded-lg bg-muted sm:h-16" />

        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
          </div>
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        </div>
      </header>

      <div className="mb-16 aspect-2/1 w-full animate-pulse rounded-2xl bg-muted sm:mb-20" />

      <div className="mx-auto max-w-prose space-y-4">
        <div className="h-8 w-1/3 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-4/6 animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-full animate-pulse rounded bg-muted/60" />

        <div className="mt-12 h-6 w-1/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted/60" />
      </div>
    </article>
  );
}
