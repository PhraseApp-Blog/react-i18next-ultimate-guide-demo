import React from "react";
import { withTranslation } from "react-i18next";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="title is-4 has-text-centered mb-5">
          {this.props.t("weekly_basket_title")}
        </h1>

        <p>2,342 baskets delivered</p>
      </div>
    );
  }
}

export default withTranslation()(Header);
