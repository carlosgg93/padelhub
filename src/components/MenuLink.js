const MenuLink = ({ label }) => (
  <a href="/home" className="text-primary-800 hover:text-primary-400 px-3 py-2 transition-colors font-semibold" aria-label="menu item">
    {label}
  </a>
);

export default MenuLink;
