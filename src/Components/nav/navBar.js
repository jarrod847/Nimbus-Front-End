import React from "react";
import searchIcon from "../../icons8-search-24.png";
import "../../scss/nav/nav.scss";
import { Link } from "react-router-dom";
import Icon from "../../resized.png";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";

const NavBar = () => {
  const userInfo = useRecoilValue(User);
  console.log(userInfo);
  return (
    <nav>
      <div className="navLinks">
        <Link to="/timeline">
          <img className="icon" src={Icon} />
        </Link>
        <Link className="header">
          <h1>Nimbus</h1>
        </Link>
        {/* <span className="navSearch">
          <input />
          <img src={searchIcon} />
        </span> */}
        {userInfo.id ? (
          <Link className="links" to="profile">
            Profile
          </Link>
        ) : (
          <Link className="links" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
