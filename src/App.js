import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { isLogged } from './utils/localStorage';
import { setUserAsync } from './store/userSlice';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const [darkMode, toggleDarkMode] = useDarkMode();

  const isAuthenticated = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleDarkMode(true);
    } else {
      toggleDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      const logged = isLogged();
      if (logged) {
        dispatch(setUserAsync(logged));
        navigation('/');
      }
    } else {
      navigation(location.pathname === '/login' ? '/' : location.pathname);
    }
  }, [isAuthenticated, dispatch, navigation, location.pathname]);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
