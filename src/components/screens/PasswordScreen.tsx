import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import type { LetterData } from '../../types/letter.types';
import styles from './PasswordScreen.module.css';

interface PasswordScreenProps {
  letter: LetterData;
  errorMessage: string;
  onSubmitPassword: (value: string) => void;
}

export const PasswordScreen = ({
  letter,
  errorMessage,
  onSubmitPassword,
}: PasswordScreenProps) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitPassword(password);
  };

  return (
    <section className={styles.screen}>
      <h2>One more step</h2>
      <p className={styles.hint}>Hint: {letter.passwordHint ?? 'No hint provided.'}</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="letter-password">Password</label>
        <input
          id="letter-password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="off"
          required
        />
        {errorMessage ? (
          <motion.p
            role="alert"
            className={styles.error}
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errorMessage}
          </motion.p>
        ) : null}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

