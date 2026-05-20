import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppLayout } from '../components/layout/AppLayout';
import { IntroScreen } from '../components/screens/IntroScreen';
import { PasswordScreen } from '../components/screens/PasswordScreen';
import { LoadingScreen } from '../components/screens/LoadingScreen';
import { LetterScreen } from '../components/screens/LetterScreen';
import { DEFAULT_LOADING_DURATION } from '../constants/letter.constants';
import { useStepFlow } from '../hooks/useStepFlow';
import type { LetterData } from '../types/letter.types';

interface LetterPageProps {
  letter: LetterData;
}

export const LetterPage = ({ letter }: LetterPageProps) => {
  const { step, begin, submitPassword, finishLoading, passwordError } = useStepFlow(letter);

  useEffect(() => {
    if (step !== 'loading') {
      return;
    }

    const timer = window.setTimeout(finishLoading, DEFAULT_LOADING_DURATION);
    return () => window.clearTimeout(timer);
  }, [step, finishLoading]);

  return (
    <AppLayout letter={letter}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {step === 'intro' ? <IntroScreen letter={letter} onContinue={begin} /> : null}
          {step === 'password' ? (
            <PasswordScreen
              letter={letter}
              errorMessage={passwordError}
              onSubmitPassword={submitPassword}
            />
          ) : null}
          {step === 'loading' ? <LoadingScreen letter={letter} /> : null}
          {step === 'letter' ? <LetterScreen letter={letter} /> : null}
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  );
};

