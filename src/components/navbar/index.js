import { Link } from "gatsby";
import React, { useState } from "react";
import Headroom from "react-headroom";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <Headroom>
      <nav className="nav">
        <div className="nav__inner-wrap">
          <Link className="nav__primary-link" to="/" title="KMMRCE Home">
            KMMRCE
          </Link>
          <Link
            className="button button_primary nav__link-cta"
            activeClassName="nav__link-cta_active"
            to="/request-demo"
            partiallyActive={true}
          >
            Request Demo
          </Link>
          <button className="button button_menu" onClick={toggleMenuVisibility}>
            MENU
          </button>
          <ul
            className={
              "nav__link-ul " +
              (isMenuVisible ? "nav__link-ul_shown" : "nav__link-ul_hidden")
            }
          >
            <li className="nav__link-li">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/platform"
              >
                Platform
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/super-merchants"
                partiallyActive={true}
              >
                Super Merchants
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/pricing"
                partiallyActive={true}
              >
                Pricing
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/partners"
                partiallyActive={true}
              >
                Partners
              </Link>
            </li>
            <li className="nav__link-li">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/docs"
                partiallyActive={true}
              >
                Docs
              </Link>
            </li>
            <li className="nav__link-li nav__link-li_cta">
              <Link
                className="nav__link-a"
                activeClassName="nav__link-a_active"
                to="/request-demo"
                partiallyActive={true}
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
