import { getBlogPosts, BlogPost } from '@/lib/api/blog';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CalendarIcon, UserIcon, TagIcon } from 'lucide-react';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { BlogSearch } from '@/components/blog/blog-search';

// Vercel Best Practice: `server-serialization` - We only serialize the required props, not the entire article content
interface BlogCardProps {
  post: Pick<BlogPost, 'slug' | 'title' | 'excerpt' | 'coverImage' | 'date' | 'author' | 'tags'>;
  priority?: boolean;
}

function BlogCard({ post, priority = false }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(post.date));

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block h-full w-full outline-ring transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Card className="flex h-full flex-col overflow-hidden bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-gray-200/50 dark:border-zinc-800/50">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority={priority}
          />
        </div>
        <CardHeader className="flex-none p-5 pb-3">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground shadow-sm"
              >
                <TagIcon className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
          <h2 className="line-clamp-2 text-xl font-bold tracking-tight text-foreground">
            {post.title}
          </h2>
        </CardHeader>
        <CardContent className="flex-1 px-5 pb-5">
          <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center gap-4 border-t border-border/50 bg-muted/20 px-5 py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <UserIcon className="h-3.5 w-3.5" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const t = await getTranslations('Blog');
  const resolvedSearchParams = await searchParams;

  // Read query params from route, Next.js will automatically handle static/dynamic rendering based on usage
  const filterTag =
    typeof resolvedSearchParams.tag === 'string' ? resolvedSearchParams.tag : undefined;
  const searchQuery =
    typeof resolvedSearchParams.query === 'string' ? resolvedSearchParams.query : undefined;
  const currentPage =
    typeof resolvedSearchParams.page === 'string'
      ? Math.max(1, parseInt(resolvedSearchParams.page, 10))
      : 1;

  const { posts, totalPages } = await getBlogPosts(filterTag, currentPage, 12, searchQuery);

  // Vercel Best Practice: Extract unique tags globally.
  // Cache dedupes this automatically via React.cache in getBlogPosts
  const allPostsResponse = await getBlogPosts(undefined, 1, 1000);
  const allTags = Array.from(
    new Set(allPostsResponse.posts.flatMap((post) => post.tags.slice(0, 5))),
  );

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (filterTag) params.set('tag', filterTag);
    if (searchQuery) params.set('query', searchQuery);
    if (page > 1) params.set('page', page.toString());
    const query = params.toString();
    return `/blog${query ? `?${query}` : ''}`;
  };

  const buildTagUrl = (tag?: string) => {
    const params = new URLSearchParams();
    if (tag) params.set('tag', tag);
    if (searchQuery) params.set('query', searchQuery);
    const query = params.toString();
    return `/blog${query ? `?${query}` : ''}`;
  };

  return (
    <div className="container mx-auto px-4 py-32 md:py-40">
      <div className="mb-12 space-y-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground text-balance">
          {t('title')}
          <span className="text-primary">{t('highlight')}</span>
        </h1>
        <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
      </div>

      <div className="mb-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={buildTagUrl()}
            shallow={true}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${!filterTag ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-transparent text-muted-foreground hover:bg-muted'}`}
          >
            {t('all')}
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={buildTagUrl(tag)}
              shallow={true}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${filterTag === tag ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-transparent text-muted-foreground hover:bg-muted'}`}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Search component */}
        <BlogSearch />
      </div>

      {posts.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border py-10 text-center">
          <p className="text-muted-foreground">{t('noPosts')}</p>
        </div>
      ) : (
        <>
          {/* Vercel Best Practice: `rendering-content-visibility` - Helpful if lists grow large */}
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16"
            style={{ contentVisibility: 'auto' }}
          >
            {posts.map((post, index) => (
              <BlogCard
                key={post.id}
                priority={index <= 2}
                post={{
                  title: post.title,
                  slug: post.slug,
                  excerpt: post.excerpt,
                  coverImage: post.coverImage,
                  date: post.date,
                  author: Object.assign({}, post.author),
                  tags: [...post.tags],
                }}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8 justify-center">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={currentPage > 1 ? buildPageUrl(currentPage - 1) : '#'}
                    aria-disabled={currentPage <= 1}
                    className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  // Show current page, edges, and adjacent pages
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink href={buildPageUrl(page)} isActive={page === currentPage}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  // Show ellipsis for skipped ranges
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }

                  return null;
                })}

                <PaginationItem>
                  <PaginationNext
                    href={currentPage < totalPages ? buildPageUrl(currentPage + 1) : '#'}
                    aria-disabled={currentPage >= totalPages}
                    className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}
