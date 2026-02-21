import 'server-only';
import { cache } from 'react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

// Temporary mock data until the real 3rd-party API is ready
const mockPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'optimizing-react-performance',
    title: 'A Guide to Optimizing React Applications in 2026',
    excerpt:
      'Learn about the latest techniques for keeping your React applications lightning fast using Server Components and advanced caching.',
    content: `
# Introduction

React performance has evolved significantly. With the introduction of React Server Components (RSC) and the App Router in Next.js, the mental model for building performant web applications has shifted.

## The Problem with Waterfalls

One of the biggest issues in modern web development is the network waterfall. When components deep in the tree need to fetch data, they block rendering until the data arrives.

## Solutions

1. **Move Fetching to the Server**: By fetching on the server, we eliminate the client-server roundtrip.
2. **Parallel Fetching**: Always use \`Promise.all()\` when fetching independent data.
3. **React Cache**: Deduplicate requests across components.

By following these simple rules, you can dramatically improve the perceived and actual loading time of your application.
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200',
    date: '2026-02-15T10:00:00Z',
    author: {
      name: 'Tony Nguyen',
      avatar: '/assets/logo.svg',
    },
    tags: ['React', 'Performance', 'Next.js'],
  },
  {
    id: '2',
    slug: 'future-of-ai-coding',
    title: 'How AI is Changing Software Engineering',
    excerpt:
      'An exploration of how AI coding assistants are transforming the day-to-day life of frontend developers.',
    content: `
# The AI Revolution in Coding

The way we write software is fundamentally changing. Tools like GitHub Copilot and Google Gemini are no longer just autocomplete engines; they are pair programmers capable of reasoning through complex architectural decisions.

## Shift in Skills

Instead of memorizing syntax, engineers now need to focus on:
- System Design
- Prompt Engineering
- Code Review and Verification
- Performance Optimization

## Conclusion

The future belongs to those who learn to orchestrate AI tools effectively, blending human creativity with machine efficiency.
    `,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
    date: '2026-01-20T14:30:00Z',
    author: {
      name: 'Tony Nguyen',
      avatar: '/assets/logo.svg',
    },
    tags: ['AI', 'Engineering', 'Career'],
  },
  {
    id: '3',
    slug: 'mastering-tailwind-v4',
    title: 'Mastering Tailwind CSS v4 New Features',
    excerpt:
      'Tailwind v4 brings a new CSS-first configuration and a blazingly fast Rust engine. Here is what you need to know.',
    content: `
# Welcome to Tailwind v4

Tailwind CSS v4 is a complete rewrite. Gone is the \`tailwind.config.js\`, replaced by a CSS-first configuration model.

## Key Features

- **Oxide Engine**: Written in Rust, it's exponentially faster.
- **CSS Configuration**: Use \`@theme\` directly in your CSS files.
- **Zero Config**: It just works out of the box.

If you are upgrading from v3, the transition is smoother than ever thanks to the automated codemods provided by the team.
    `,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1200',
    date: '2025-12-05T09:15:00Z',
    author: {
      name: 'Tony Nguyen',
      avatar: '/assets/logo.svg',
    },
    tags: ['CSS', 'Tailwind', 'Design'],
  },
];

// Generate 200 mock posts for performance testing based on the original 3
const extendedMockPosts: BlogPost[] = Array.from({ length: 200 }).map((_, i) => {
  const basePost = mockPosts[i % mockPosts.length];
  return {
    ...basePost,
    id: `${i + 1}`,
    slug: `${basePost.slug}-${i + 1}`,
    title: `${basePost.title} (Stress Test Post ${i + 1})`,
    // Stagger dates to test sorting correctness
    date: new Date(new Date(basePost.date).getTime() - i * 24 * 60 * 60 * 1000).toISOString(),
  };
});

// Simulate network delay to test loading skeletons
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Using React.cache() per Vercel Best Practices (server-cache-react)
// This deduplicates identical requests within the same server render pass.
export const getBlogPosts = cache(
  async (
    tag?: string,
    page: number = 1,
    limit: number = 12,
    query?: string,
  ): Promise<{ posts: BlogPost[]; totalPages: number }> => {
    await delay(1200); // Artificial delay

    // Enforce max 5 tags per post
    const sanitizedPosts = extendedMockPosts.map((post) => ({
      ...post,
      tags: post.tags.slice(0, 5),
    }));

    let filteredPosts = sanitizedPosts;

    if (tag) {
      filteredPosts = sanitizedPosts.filter((post) => post.tags.includes(tag));
    }

    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredPosts = filteredPosts.filter((post) => post.title.toLowerCase().includes(lowerQuery));
    }

    // Sort newest first
    const sortedPosts = filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    // Calculate Pagination
    const totalPages = Math.ceil(sortedPosts.length / limit);
    const startIndex = (page - 1) * limit;
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + limit);

    return {
      posts: paginatedPosts,
      totalPages,
    };
  },
);

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | undefined> => {
  await delay(800);
  return extendedMockPosts.find((post) => post.slug === slug);
});
