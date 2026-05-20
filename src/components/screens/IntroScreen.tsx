import { motion } from 'framer-motion';
import type { LetterData } from '../../types/letter.types';
import styles from './IntroScreen.module.css';

interface IntroScreenProps {
  letter: LetterData;
  onContinue: () => void;
}

export const IntroScreen = ({ letter, onContinue }: IntroScreenProps) => {
  return (
    <section className={styles.screen}>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {letter.introTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.22 }}
      >
        {letter.introMessage}
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className={styles.button}
      >
        Open Letter
      </motion.button>
    </section>
  );
};

