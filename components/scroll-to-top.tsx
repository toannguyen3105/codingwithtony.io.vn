'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={scrollToTop}
        size="icon"
        className={cn(
          'rounded-full shadow-lg transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
