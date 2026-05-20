import { motion } from 'framer-motion';
import type { LetterData } from '../../types/letter.types';
import styles from './AnimatedBackground.module.css';

interface AnimatedBackgroundProps {
  letter: LetterData;
}

export const AnimatedBackground = ({ letter }: AnimatedBackgroundProps) => {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.overlay} />
      {letter.background.floatingElements.map((item, index) => (
        <motion.span
          key={`${letter.slug}-bg-${index}`}
          className={styles.orb}
          style={{
            width: item.size,
            height: item.size,
            left: item.x,
            top: item.y,
            background: item.color,
            filter: `blur(${item.blur}px)`,
          }}
          animate={{
            y: [0, -18, 0, 12, 0],
            x: [0, 10, -8, 0],
            opacity: [0.55, 0.9, 0.62, 0.8],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </div>
  );
};

