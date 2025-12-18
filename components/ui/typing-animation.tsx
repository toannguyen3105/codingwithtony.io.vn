'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypingAnimationProps extends MotionProps {
  className?: string;
  text: string;
  duration?: number;
}

export function TypingAnimation({
  className,
  text,
  duration = 0.1,
  ...props
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, duration * 1000);

    return () => clearInterval(intervalId);
  }, [text, duration]);

  return (
    <motion.h1
      className={cn(
        'font-display text-4xl font-bold leading-20 tracking-[-0.02em] drop-shadow-sm',
        className,
      )}
      {...props}
    >
      {displayedText}
    </motion.h1>
  );
}
