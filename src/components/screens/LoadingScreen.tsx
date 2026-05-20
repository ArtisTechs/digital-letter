import { motion } from 'framer-motion';
import type { LetterData } from '../../types/letter.types';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  letter: LetterData;
}

export const LoadingScreen = ({ letter }: LoadingScreenProps) => {
  return (
    <section className={styles.screen}>
      <motion.div
        className={styles.spark}
        animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 24 24" className={styles.sparkIcon} aria-hidden="true">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
        </svg>
      </motion.div>
      <p>{letter.loadingMessage}</p>
    </section>
  );
};
