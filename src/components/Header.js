import Logo from './Logo';
import NavBar from './Navbar';
import MenuButton from './MenuButton';
import MenuIconsList from './MenuIconsList';
import DropDownNavBar from './DropdownNavbar';

const Header = () => (
  <header className="sticky top-0 w-full bg-primary-0 px-20 py-1 shadow">
    <div className="sticky top-0 z-40 w-full bg-primary-0 py-1 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Logo />
            <div className="relative hidden md:flex items-center ml-auto">
              <NavBar />
              <MenuIconsList />
            </div>
            <button type="button" className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 md:hidden dark:text-slate-400 dark:hover:text-slate-300">
              <span className="sr-only">Search</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </button>
            <MenuButton />
          </div>
        </div>
      </div>
    </div>
    <DropDownNavBar />
  </header>
);

export default Header;
