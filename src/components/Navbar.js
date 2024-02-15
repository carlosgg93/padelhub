import MenuLink from './MenuLink';

const Navbar = () => (
  <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
    <ul className="flex space-x-8">
      <li>
        <MenuLink label="Home" />
      </li>
      <li>
        <MenuLink label="Tournaments" />
      </li>
      <li>
        <MenuLink label="About" />
      </li>
      <li>
        <MenuLink label="Contact" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
