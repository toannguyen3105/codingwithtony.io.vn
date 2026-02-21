import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const loadingCard = (
  <Card className="flex h-full flex-col overflow-hidden bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-gray-200/50 dark:border-zinc-800/50">
    <div className="relative aspect-video w-full animate-pulse bg-muted" />
    <CardHeader className="flex-none p-5 pb-3">
      <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-6 w-1/2 animate-pulse rounded bg-muted" />
    </CardHeader>
    <CardContent className="flex-1 px-5 pb-5">
      <div className="space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted/60" />
        <div className="h-4 w-4/6 animate-pulse rounded bg-muted/60" />
      </div>
    </CardContent>
    <CardFooter className="flex items-center gap-4 border-t border-border/50 bg-muted/20 px-5 py-3">
      <div className="h-3 w-20 animate-pulse rounded bg-muted" />
      <div className="h-3 w-20 animate-pulse rounded bg-muted" />
    </CardFooter>
  </Card>
);

export default function BlogLoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="mb-12 space-y-4 max-w-3xl">
        <div className="h-12 w-64 animate-pulse rounded-lg bg-muted sm:h-16 md:w-96" />
        <div className="space-y-2">
          <div className="h-5 w-full max-w-lg animate-pulse rounded bg-muted/60" />
          <div className="h-5 w-3/4 max-w-md animate-pulse rounded bg-muted/60" />
        </div>
      </div>

      {/* Vercel Best Practice: `rendering-hoist-jsx` - Using hoisted static node instead of recreating skeletons */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loadingCard}
        {loadingCard}
        {loadingCard}
        {loadingCard}
        {loadingCard}
        {loadingCard}
      </div>
    </div>
  );
}
