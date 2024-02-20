import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import DarkModeMenu from './DarkModeMenu';
import UserMenu from './UserMenu';

const MenuIconsList = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.user.isLogged);

  return (
    <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
      <DarkModeMenu />

      {isAuthenticated && <UserMenu />}

      {!isAuthenticated && (
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="ml-2 text-primary-800 hover:text-primary-400 focus:ring-2"
            aria-label="user button"
            onClick={() => {
              navigation(location.pathname !== '/login' ? '/login' : location.pathname);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      )}
    </div>
  );
};

export default MenuIconsList;
