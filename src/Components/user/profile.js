import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";

const Profile = (props) => {
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };
  const userInfo = useRecoilValue(User);
  console.log(userInfo);

  return (
    <div className="profile">
      <div>
        <img src={userInfo.img} />
      </div>
      <div className="userInfo">
        <h3>Display Name: {userInfo.displayName}</h3>
        <p>Bio: {userInfo.bio}</p>
        <Link>Edit Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
