import { motion } from 'framer-motion';
import { useTypingParagraphs } from '../../hooks/useTypingParagraphs';
import styles from './TypingLetter.module.css';

interface TypingLetterProps {
  paragraphs: string[];
}

export const TypingLetter = ({ paragraphs }: TypingLetterProps) => {
  const { lines, done } = useTypingParagraphs(paragraphs);
  const activeLineIndex = done
    ? -1
    : lines.findIndex((line, index) => line.length < paragraphs[index].length);

  return (
    <div className={styles.body}>
      {lines.map((line, index) => (
        <p key={`line-${index}`}>
          {line}
          {index === activeLineIndex ? (
            <motion.span
              className={styles.caret}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          ) : null}
        </p>
      ))}
    </div>
  );
};

