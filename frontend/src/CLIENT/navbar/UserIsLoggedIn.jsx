import React from "react";
import { Link } from "react-router-dom";
import navbarData from "./navbardata";
import "./navbar.css";

const UserIsLoggedIn = () => {
  const { navbarLinksIsAuthenticated } = navbarData;
  return (
    <div id="nav-conditional-rendering">
      {navbarLinksIsAuthenticated.map((map_para, index) => {
        const { name, url } = map_para;
        return (
          <li className="nav-item navbar-container" key={index}>
            <Link to={url} className="navlink">
              {name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default UserIsLoggedIn;
