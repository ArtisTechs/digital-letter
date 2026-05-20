import { useEffect } from 'react';
import styles from './HomePage.module.css';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Digital Letter | About';
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orbOne}`} />
        <span className={`${styles.orb} ${styles.orbTwo}`} />
        <span className={`${styles.orb} ${styles.orbThree}`} />
      </div>
      <section className={styles.card}>
        <h1>Digital Letter</h1>
        <p>
          This website creates personalized interactive web letters. Add a recipient ID in the URL
          to open a themed and animated letter experience.
        </p>
        <div className={styles.trivia}>
          <h2>Trivia</h2>
          <p>
            The oldest known surviving personal letter is over 3,500 years old, and people still use
            letters today for one reason: heartfelt words are timeless.
          </p>
        </div>
      </section>
    </main>
  );
};
