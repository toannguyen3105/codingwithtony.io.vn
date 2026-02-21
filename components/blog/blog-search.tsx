'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function BlogSearch() {
  const t = useTranslations('Blog');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [term, setTerm] = useState(searchParams.get('query') || '');

  useEffect(() => {
    // Vercel Best Practice: Debounce filtering to prevent rapid layout shifts and redundant requests
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
        params.delete('page'); // Reset to page 1 on new search
      } else {
        params.delete('query');
      }
      // Replace URL without scrolling to top
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 400);

    return () => clearTimeout(handler);
  }, [term, pathname, replace, searchParams]);

  return (
    <div className="relative w-full sm:w-80">
      <label htmlFor="search" className="sr-only">
        {t('searchAriaLabel')}
      </label>
      <Input
        id="search"
        name="query"
        autoComplete="off"
        className="pl-9 h-10 w-full rounded-full border-border bg-transparent shadow-sm"
        placeholder={t('searchPlaceholder')}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
    </div>
  );
}
