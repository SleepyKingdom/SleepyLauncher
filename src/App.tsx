import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import LoaderPage from './pages/LoaderPage';
import SettingsPage from './pages/SettingsPage';
import NewsPage from './pages/NewsPage';

export type Page = 'login' | 'loader' | 'settings' | 'news';

function App() {
  const [page, setPage] = useState<Page>('login');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    window.api.getSettings().then(() => {
      // placeholder for auth check
      setAuthenticated(true);
      setPage('news');
    }).catch(() => {
      setPage('login');
    });
  }, []);

  if (!authenticated && page === 'login') return <LoginPage onLogin={() => setAuthenticated(true)} />;
  if (page === 'loader') return <LoaderPage />;
  if (page === 'settings') return <SettingsPage />;
  return <NewsPage />;
}

export default App;
