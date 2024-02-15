const MenuButton = () => (
  <div className="ml-2 -my-1 md:hidden">
    <button type="button" className="text-primary-800 w-8 h-8 flex items-center justify-center hover:text-primary-400 dark:text-slate-400 dark:hover:text-slate-300">
      <span className="sr-only">Navigation</span>
      <svg width="24" height="24" fill="none" aria-hidden="true">
        <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
);

export default MenuButton;
