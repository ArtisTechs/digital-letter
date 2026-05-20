import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1>Letter not found</h1>
        <p>The link you opened does not match an existing letter.</p>
        <Link to="/default">Open default letter</Link>
      </div>
    </main>
  );
};

