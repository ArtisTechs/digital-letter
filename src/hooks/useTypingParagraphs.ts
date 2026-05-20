import { useEffect, useMemo, useState } from 'react';

interface UseTypingParagraphsOptions {
  charDelay?: number;
  paragraphPause?: number;
}

interface UseTypingParagraphsResult {
  lines: string[];
  done: boolean;
}

export const useTypingParagraphs = (
  paragraphs: string[],
  options: UseTypingParagraphsOptions = {},
): UseTypingParagraphsResult => {
  const { charDelay = 18, paragraphPause = 320 } = options;

  const [lines, setLines] = useState<string[]>(() => paragraphs.map(() => ''));
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLines(paragraphs.map(() => ''));
    setDone(false);

    let paragraphIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    let timeoutRef: number | undefined;

    const typeNext = () => {
      if (cancelled) return;

      if (paragraphIndex >= paragraphs.length) {
        setDone(true);
        return;
      }

      const currentParagraph = paragraphs[paragraphIndex];

      if (charIndex <= currentParagraph.length) {
        setLines((prev) => {
          const next = [...prev];
          next[paragraphIndex] = currentParagraph.slice(0, charIndex);
          return next;
        });
        charIndex += 1;
        timeoutRef = window.setTimeout(typeNext, charDelay);
      } else {
        paragraphIndex += 1;
        charIndex = 0;
        timeoutRef = window.setTimeout(typeNext, paragraphPause);
      }
    };

    timeoutRef = window.setTimeout(typeNext, 250);

    return () => {
      cancelled = true;
      if (timeoutRef) {
        window.clearTimeout(timeoutRef);
      }
    };
  }, [paragraphs, charDelay, paragraphPause]);

  return useMemo(
    () => ({
      lines,
      done,
    }),
    [lines, done],
  );
};

