import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className={`header ${toggleMenu ? "open" : ""}`}>
      <div className="overlay has-fade"></div>
      <nav>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div
          id="btnHamburger"
          className={`header__toggle hide-for-desktop `}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__links">
          <Link to="/about">About Us</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/trading">Trading</Link>
          <Link to="/terms">Resources</Link>
          <button className="header__lg-btn">Login</button>
          <button className="header__oa-btn">Open Account</button>
        </div>
      </nav>
      {toggleMenu && (
        <div className="header__menu ">
          <Link to="/about" onClick={() => setToggleMenu(false)}>
            About Us
          </Link>
          <Link to="/accounts" onClick={() => setToggleMenu(false)}>
            Accounts
          </Link>
          <Link to="/trading" onClick={() => setToggleMenu(false)}>
            Trading
          </Link>
          <Link to="/terms" onClick={() => setToggleMenu(false)}>
            Resources
          </Link>
          <button
            className="header__lg-btn"
            onClick={() => setToggleMenu(false)}
          >
            Login
          </button>
          <button
            className="header__oa-btn"
            onClick={() => setToggleMenu(false)}
          >
            Open Account
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
