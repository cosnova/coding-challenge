import Logo from "./Logo.js";
import Navigation from "./Navigation.js";
import './style.css';

const Header = () => (
  <header className="header">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
