const DropDownNavBar = () => (
  <div className="space-y-1 pb-3 border-t pt-2 md:hidden">
    <a href="/home" className="block font-semibold rounded-md px-3 py-2 bg-primary-900 hover:text-primary-400" aria-label="menu item">
      Home
    </a>
    <a href="/home" className="block font-semibold rounded-md px-3 py-2 text-primary-800 hover:text-primary-400 hover:bg-primary-900" aria-label="menu item">
      About
    </a>
    <a href="/home" className="block font-semibold rounded-md px-3 py-2 text-primary-800 hover:text-primary-400 hover:bg-primary-900" aria-label="menu item">
      Contact
    </a>
  </div>
);

export default DropDownNavBar;
