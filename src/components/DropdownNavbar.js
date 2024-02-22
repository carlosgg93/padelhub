import { Transition } from '@headlessui/react';

const DropDownNavBar = ({ open }) => (
  <Transition show={open} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
    <div id="mobileDropDownMenu" className="space-y-1 pb-3 border-t pt-2 md:hidden">
      <a href="/home" className="block font-semibold rounded-md px-3 py-2 bg-primary-900 hover:text-primary-400" aria-label="menu item">
        Home
      </a>
      <a href="/tournaments" className="block font-semibold rounded-md px-3 py-2 text-primary-800 hover:text-primary-400 hover:bg-primary-900" aria-label="menu item">
        Tournaments
      </a>
      <a href="/about" className="block font-semibold rounded-md px-3 py-2 text-primary-800 hover:text-primary-400 hover:bg-primary-900" aria-label="menu item">
        About
      </a>
      <a href="/contact" className="block font-semibold rounded-md px-3 py-2 text-primary-800 hover:text-primary-400 hover:bg-primary-900" aria-label="menu item">
        Contact
      </a>
    </div>
  </Transition>
);

export default DropDownNavBar;
