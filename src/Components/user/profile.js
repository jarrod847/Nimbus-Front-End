import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";

const Profile = (props) => {
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
    window.location.reload();
  };
  const userInfo = useRecoilValue(User);
  console.log(userInfo);
  const user = localStorage.getItem("User");
  const bio = localStorage.getItem("Bio");
  const img = localStorage.getItem("img");

  return (
    <div className="profile">
      <div>
        <img src={img} />
      </div>
      <div className="userInfo">
        <h3>Display Name: {user}</h3>
        <p>Bio: {bio}</p>
        <Link>Edit Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
