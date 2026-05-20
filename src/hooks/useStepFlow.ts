import { useCallback, useMemo, useState } from 'react';
import type { LetterData, LetterStep } from '../types/letter.types';

interface UseStepFlowResult {
  step: LetterStep;
  begin: () => void;
  submitPassword: (value: string) => boolean;
  finishLoading: () => void;
  passwordError: string;
}

export const useStepFlow = (letter: LetterData): UseStepFlowResult => {
  const initialStep: LetterStep = letter.passwordRequired ? 'intro' : 'intro';
  const [step, setStep] = useState<LetterStep>(initialStep);
  const [passwordError, setPasswordError] = useState('');

  const begin = useCallback(() => {
    if (letter.passwordRequired) {
      setStep('password');
      return;
    }
    setStep('loading');
  }, [letter.passwordRequired]);

  const submitPassword = useCallback(
    (value: string) => {
      const isValid = value.trim() === (letter.password ?? '');
      if (!isValid) {
        setPasswordError('That password does not match. Please try again.');
        return false;
      }
      setPasswordError('');
      setStep('loading');
      return true;
    },
    [letter.password],
  );

  const finishLoading = useCallback(() => {
    setStep('letter');
  }, []);

  return useMemo(
    () => ({
      step,
      begin,
      submitPassword,
      finishLoading,
      passwordError,
    }),
    [step, begin, submitPassword, finishLoading, passwordError],
  );
};

