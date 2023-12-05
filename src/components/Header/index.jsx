import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "./img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header-logo">
          <NavLink to="/">
            <img
              className="header_logo"
              src={Logo}
              alt="Sluneční Průvodce logo - odkaz na hlavní stranku"
            />
          </NavLink>
          <p className="header-p">Sluneční Průvodce</p>
        </div>

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
