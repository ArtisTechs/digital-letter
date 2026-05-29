import { Link } from 'react-router-dom';
import habilinLogo from '../assets/habilin-logo.png';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img src={habilinLogo} alt="Habilin logo" className={styles.logo} />
        <h1>Letter not found</h1>
        <p>The link you opened does not match an existing letter.</p>
        <Link to="/">Back to home</Link>
      </div>
    </main>
  );
};
