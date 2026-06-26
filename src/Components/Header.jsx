import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Logo className="header-logo" />
      <div className="nav-container">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </div>
    </div>
  );
};

export default Header;
