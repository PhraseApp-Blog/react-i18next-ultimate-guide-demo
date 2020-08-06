import React from "react";
import logo from "../logo.png";

export default function () {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="navbar-logo" src={logo} alt="logo" />

          <strong>Grootbasket</strong>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Weekly Basket
          </a>
        </div>
      </div>
    </nav>
  );
}
