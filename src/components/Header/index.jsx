import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "./img/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <NavLink to="">
          <img className="header_logo" src={Logo}></img>
        </NavLink>
        <nav className="header_links">
          <NavLink to="/test" className="header_link">
            Test
          </NavLink>
          <NavLink to="/map" className="header_link">
            Mapa
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
