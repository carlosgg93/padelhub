const MenuLink = ({ label }) => (
  <a href="/home" className="text-primary-800 hover:text-primary-400 px-1 py-1 transition-colors text-sm font-semibold" aria-label="menu item">
    {label}
  </a>
);

export default MenuLink;
