import { useDispatch } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import { logOutUserAsync } from '../store/userSlice';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const avatar = `https://ui-avatars.com/api/?name=${user.name}+${user.surname}&background=7A6F8A&color=fff`;

  const handleLogOut = () => {
    dispatch(logOutUserAsync());
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <span className="rounded-md shadow-sm">
            <Menu.Button>
              <img src={avatar} alt="User" className="h-6 w-6 rounded-full" />
            </Menu.Button>
          </span>
          <Transition show={open} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
            <Menu.Items static className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-lg ring-1 ring-slate-900/10 divide-y divide-gray-100 text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 rounded-md shadow-lg outline-none">
              <div className="px-4 py-3">
                <p className="text-sm leading-5">Signed in as</p>
                <p className="text-sm font-medium leading-5 text-slate-700 dark:text-slate-200 truncate">{user.email}</p>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button type="button" className={`${active ? 'bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'text-gray-700'} flex w-full px-4 py-2 text-sm leading-5 text-left`}>
                      Account settings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${active ? 'bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'text-gray-700'} flex w-full px-4 py-2 text-sm leading-5 text-left`}
                      onClick={(ev) => {
                        handleLogOut(ev);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                      </svg>
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default UserMenu;
