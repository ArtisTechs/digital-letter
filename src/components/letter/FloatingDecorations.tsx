import { motion } from 'framer-motion';
import styles from './FloatingDecorations.module.css';

const iconTypes = ['heart', 'star', 'flower', 'dot'] as const;

type IconType = (typeof iconTypes)[number];

const DecorationIcon = ({ type }: { type: IconType }) => {
  if (type === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path d="M12 21s-6.7-4.2-9.4-8C.8 10.5 1.2 6.8 4 5.2c2.2-1.3 4.8-.5 6.2 1.4 1.4-1.9 4-2.7 6.2-1.4 2.8 1.6 3.2 5.3 1.4 7.8C18.7 16.8 12 21 12 21z" />
      </svg>
    );
  }

  if (type === 'flower') {
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <path d="M12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zm0-6.2a2.8 2.8 0 0 1 2.8 2.8c0 1.5-1.1 2.6-2.8 3.2-1.7-.6-2.8-1.7-2.8-3.2A2.8 2.8 0 0 1 12 3zm0 18a2.8 2.8 0 0 1-2.8-2.8c0-1.5 1.1-2.6 2.8-3.2 1.7.6 2.8 1.7 2.8 3.2A2.8 2.8 0 0 1 12 21zM3 12a2.8 2.8 0 0 1 2.8-2.8c1.5 0 2.6 1.1 3.2 2.8-.6 1.7-1.7 2.8-3.2 2.8A2.8 2.8 0 0 1 3 12zm18 0a2.8 2.8 0 0 1-2.8 2.8c-1.5 0-2.6-1.1-3.2-2.8.6-1.7 1.7-2.8 3.2-2.8A2.8 2.8 0 0 1 21 12z" />
      </svg>
    );
  }

  if (type === 'dot') {
    return (
      <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  );
};

export const FloatingDecorations = () => {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {iconTypes.map((type, index) => (
        <motion.span
          key={`${type}-${index}`}
          className={styles.decoration}
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: [0.24, 0.54, 0.24],
            y: [12, -8, 12],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: 5 + index,
            delay: index * 0.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          style={{ left: `${8 + index * 22}%` }}
        >
          <DecorationIcon type={type} />
        </motion.span>
      ))}
    </div>
  );
};
