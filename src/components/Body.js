import React, { useEffect } from 'react';
import TournamentList from './TournamentList';
import LoginForm from './LoginForm';
import { getDarkMode, setDarkMode } from '../utils/localStorage';

const Body = () => {
  useEffect(() => {
    const darkMode = getDarkMode();
    if (darkMode === 'true' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      document.getElementById('darkmode').checked = true;
    } else {
      document.body.classList.remove('dark');
      document.getElementById('darkmode').checked = false;
    }
  }, []);

  const handleChangeDarkMode = (ev) => {
    if (ev.target.checked) {
      document.body.classList.add('dark');
      setDarkMode('true');
    } else {
      document.body.classList.remove('dark');
      setDarkMode('false');
    }
  };

  return (
    <main className="dark:bg-slate-900 p-4">
      <TournamentList />
      <LoginForm />
      <input type="checkbox" id="darkmode" className="" onClick={(ev) => handleChangeDarkMode(ev)} />
    </main>
  );
};

export default Body;
