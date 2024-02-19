import { setDarkMode, getDarkMode } from '../utils/localStorage';

const useDarkMode = () => {
  const toggleDarkMode = (enabled) => {
    if (enabled) {
      document.body.classList.add('dark');
      setDarkMode('true');
    } else {
      document.body.classList.remove('dark');
      setDarkMode('false');
    }
  };

  const darkMode = getDarkMode() === 'true';

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
