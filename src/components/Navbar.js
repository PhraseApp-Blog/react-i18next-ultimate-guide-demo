import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../logo.png";

function Navbar() {
  const { t, ready } = useTranslation([
    "translation",
    "navbar",
  ]);

  if (ready) {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              className="navbar-logo"
              src={logo}
              alt="logo"
            />

            <strong>{t("app_name")}</strong>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              {t("navbar:weekly_basket")}
            </a>
          </div>
        </div>
      </nav>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default Navbar;
