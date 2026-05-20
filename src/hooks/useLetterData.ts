import { useMemo } from 'react';
import { letters } from '../data/letters';
import type { LetterData } from '../types/letter.types';

interface UseLetterDataResult {
  letter: LetterData | null;
  fallbackLetter: LetterData;
}

export const useLetterData = (id: string | undefined): UseLetterDataResult => {
  const normalizedId = (id ?? '').trim().toLowerCase();

  const fallbackLetter = useMemo(
    () => letters.find((item) => item.slug === 'default') ?? letters[0],
    [],
  );

  const letter = useMemo(
    () => letters.find((item) => item.id.toLowerCase() === normalizedId) ?? null,
    [normalizedId],
  );

  return {
    letter,
    fallbackLetter,
  };
};

