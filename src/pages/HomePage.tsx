import { useEffect } from 'react';
import { QrDownloadFab } from '../components/common/QrDownloadFab';
import styles from './HomePage.module.css';

const TRIVIA_ITEMS = [
  'The oldest known surviving personal letter is over 3,500 years old.',
  'In many cultures, handwritten letters are still saved as family keepsakes for generations.',
  'The word "post" in postal service comes from relay posts where couriers changed horses.',
  'Ancient messengers sometimes carried wax tablets before paper became common.',
  'Some historical letters were sealed with colored wax to show status or urgency.',
  'The phrase "snail mail" became popular after email became common in the 1990s.',
  'Air mail markings were introduced to help speed sorting and transport decisions.',
  'Envelope windows were designed to reduce addressing errors in large mail campaigns.',
  'Parchment was widely used for important letters before paper became affordable.',
  'Famous scientists often shared discoveries first through private letters.',
  'Many museums preserve letters because they capture everyday life details missing in official records.',
  'Postcards became globally popular in the late 19th century as low-cost communication.',
  'Some countries once used pneumatic tubes to send messages across city centers.',
  'Historically, letter-writing guides taught structure, tone, and etiquette.',
  'The greeting "Dear" has been used in letters for centuries across different languages.',
  'Letters played a major role in long-distance relationships before telephones were common.',
  'Some wartime letters were censored, with sections blacked out for security.',
  'Monograms on stationery became a status symbol in parts of Europe and America.',
  'Ink chemistry improved dramatically in the 1800s, making writing more durable.',
  'Many people still write letters for milestones like birthdays, weddings, and anniversaries.',
  'Time capsules often include handwritten letters to preserve personal voices for the future.',
  'Philately, the study of stamps, often starts with old letters and envelopes.',
];

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Digital Letter | About';
  }, []);

  const randomTrivia = TRIVIA_ITEMS[Math.floor(Math.random() * TRIVIA_ITEMS.length)];

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
          This website creates personalized interactive web letters.
        </p>
        <div className={styles.trivia}>
          <h2>Trivia</h2>
          <p>{randomTrivia}</p>
        </div>
      </section>
      <QrDownloadFab label="Digital Letter" color="#cf5b89" />
    </main>
  );
};
