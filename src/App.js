import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { getDarkMode, isLogged } from './utils/localStorage';
import { setUserAsync } from './store/userSlice';
import LoginForm from './components/LoginForm';

function App() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    const darkMode = getDarkMode();
    if (darkMode === 'true' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      const logged = isLogged();
      if (logged) {
        dispatch(setUserAsync(logged));
        navigation('/');
      } else {
        navigation('/login');
      }
    } else {
      navigation(location.pathname === '/login' ? '/' : location.pathname);
    }
  }, [isAuthenticated, dispatch, navigation, location.pathname]);

  return (
    <>
      <Header />
      {isAuthenticated ? <Body /> : <LoginForm />}
      <Footer />
    </>
  );
}

export default App;
