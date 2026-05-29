import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LetterPage } from './pages/LetterPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLetterData } from './hooks/useLetterData';
import { toThemeCssVars } from './utils/theme.utils';
import { HomePage } from './pages/HomePage';

const LetterRoute = () => {
  const { id } = useParams<{ id: string }>();
  const { letter } = useLetterData(id);

  useEffect(() => {
    if (!letter) {
      document.title = 'Letter Not Found | Habilin';
      return;
    }

    document.title = `${letter.recipientName} | Habilin`;
  }, [letter]);

  if (!letter) {
    return <NotFoundPage />;
  }

  return (
    <div style={toThemeCssVars(letter)}>
      <LetterPage letter={letter} />
    </div>
  );
};

const App = () => {
  return <HomePage />;
};

export { App, LetterRoute };

