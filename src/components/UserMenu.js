import { useDispatch } from 'react-redux';
import { logOutUserAsync } from '../store/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserAsync());
  };

  return (
    <ul id="dropdownUserMenu" className="hidden absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8">
      <li
        className="py-1 px-2 flex items-center cursor-pointer  hover:bg-slate-200 dark:hover:bg-slate-700"
        onClick={(ev) => {
          handleLogOut(ev);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        Logout
      </li>
    </ul>
  );
};

export default UserMenu;
