import MenuLink from './MenuLink';

const Navbar = () => (
  <div className="hidden md:flex -mr-2 items-center">
    <div className="space-x-8 ml-8">
      <MenuLink label="Home" />
      <MenuLink label="About" />
      <MenuLink label="Contact" />
    </div>
  </div>
);

export default Navbar;
