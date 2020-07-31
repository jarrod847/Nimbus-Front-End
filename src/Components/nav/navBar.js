import React from "react";
import searchIcon from "../../icons8-search-24.png";
import "../../scss/nav/nav.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navLinks">
        <Link className="links" to="/profile">
          Profile
        </Link>
        <Link className="links" to="/notify">
          Notification
        </Link>
        <span className="navSearch">
          <input />
          <img src={searchIcon} />
        </span>
        <Link className="links" to="/timeline">
          Time Line
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
