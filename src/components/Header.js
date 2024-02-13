import Logo from './Logo';
import NavBar from './Navbar';
import MenuButton from './MenuButton';
import MenuIconsList from './MenuIconsList';
import DropDownNavBar from './DropdownNavbar';

const Header = () => (
  <header className="bg-primary-0 px-20 py-3 shadow">
    <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
      <MenuButton />
      <Logo />
      <NavBar />
      <MenuIconsList />
    </div>

    <DropDownNavBar />
  </header>
);

export default Header;
