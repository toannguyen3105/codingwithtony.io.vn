'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  words: string[];
  className?: string; // Allow extending styles
}

export function TypingText({ words, className }: TypingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setCurrentText((prev) =>
        isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1),
      );
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`inline-block min-w-[120px] text-left ${className || ''}`}>
      <span className="font-semibold text-white underline decoration-2 underline-offset-4">
        {currentText}
      </span>
      <span className="animate-blink ml-1 inline-block h-[1em] w-[2px] bg-white align-middle" />
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </span>
  );
}
