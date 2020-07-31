import React from "react";
import searchIcon from "../../icons8-search-24.png";
import "../../scss/nav/nav.scss";
import { Link } from "react-router-dom";
import Icon from "../../resized.png";

const NavBar = () => {
  return (
    <nav>
      <div className="navLinks">
        <Link to="/timeline">
          <img className="icon" src={Icon} />
        </Link>
        <span className="navSearch">
          <input />
          <img src={searchIcon} />
        </span>
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
