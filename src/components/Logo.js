import logo from '../logo.svg';

const Logo = () => (
  <a href="/" className="text-primary-800">
    <img src={logo} className="h-16 w-16 animate-pulse" alt="Logo" />
  </a>
);

export default Logo;
