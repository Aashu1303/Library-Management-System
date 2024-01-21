import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import navbarData from "./navbardata";
import UserLogin from "./UserIsLoggedIn";
import UserSignin from "./UserIsNotLoggedIn";
import NavbarSearch from "./NavbarSearch";

import { useLoginState } from "../../LoginState";
import { MdHeight } from "react-icons/md";

const Navbar = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const userLoginState = useLoginState();
  const { navbarLinks, navbarTitle, navbarImage } = navbarData;

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <Link to="/" className="a">
          <img
            src={navbarImage}
            alt="Logo"
            width={"100"}
            className="d-sm-inline-block d-none vitlogo"
          />
          <h4 className="heading" id="navbar-title-text">
            {navbarTitle}
          </h4>
        </Link>

        <button
          id="navbar-mobileview-btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end fs-5 navbar-container">
            {navbarLinks.map((link, index) => {
              const { name, url } = link;
              return (
                <li className="nav-item" key={index}>
                  <Link to={url} className="navlink">
                    {name}
                  </Link>
                </li>
              );
            })}
            {userLoginState.userLogState ? <UserLogin /> : <UserSignin />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
