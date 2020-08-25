import React from "react";
import { Translation } from "react-i18next";

class Header extends React.Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <div className="header">
            <h1 className="title is-4 has-text-centered mb-5">
              {t("weekly_basket_title")}
            </h1>

            <p>2,342 baskets delivered</p>
          </div>
        )}
      </Translation>
    );
  }
}

export default Header;
