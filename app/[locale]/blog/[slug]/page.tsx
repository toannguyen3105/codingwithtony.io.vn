import { getBlogPostBySlug } from '@/lib/api/blog';
import { notFound } from 'next/navigation';
import { CalendarIcon, ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations('Blog');

  // `getBlogPostBySlug` is cached by React.cache(), ensuring deduplication
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(new Date(post.date));

  return (
    <article className="container mx-auto max-w-4xl px-4 py-32 md:py-40">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        {t('backToAll')}
      </Link>

      <header className="mb-12 space-y-8 text-center sm:mb-16">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {post.tags.slice(0, 5).map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                {tag}
              </Link>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            {post.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium text-foreground">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
        </div>
      </header>

      <div className="relative mb-16 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl sm:mb-20">
        <div className="aspect-2/1 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      <div className="prose prose-zinc mx-auto dark:prose-invert lg:prose-lg prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
        {/* Simulating markdown rendering. In reality, you would use next-mdx-remote or similar */}
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('# ')) {
            return <h1 key={i}>{line.replace('# ', '')}</h1>;
          }
          if (line.startsWith('## ')) {
            return <h2 key={i}>{line.replace('## ', '')}</h2>;
          }
          if (line.startsWith('- ')) {
            return (
              <ul key={i}>
                <li>{line.replace('- ', '')}</li>
              </ul>
            );
          }
          if (line.trim().length === 0) return null;
          return <p key={i}>{line}</p>;
        })}
      </div>
    </article>
  );
}
