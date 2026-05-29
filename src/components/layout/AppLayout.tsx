import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { LetterData } from '../../types/letter.types';
import habilinLogo from '../../assets/habilin-logo.png';
import styles from './AppLayout.module.css';
import { AnimatedBackground } from '../letter/AnimatedBackground';
import { FloatingDecorations } from '../letter/FloatingDecorations';

interface AppLayoutProps {
  letter: LetterData;
  children: ReactNode;
}

export const AppLayout = ({ letter, children }: AppLayoutProps) => {
  return (
    <div className={styles.page}>
      <AnimatedBackground letter={letter} />
      <FloatingDecorations />
      <motion.main
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <img src={habilinLogo} alt="Habilin logo" className={styles.logo} />
        {children}
      </motion.main>
    </div>
  );
};
