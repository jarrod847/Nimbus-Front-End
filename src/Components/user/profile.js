import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
    window.location.reload();
  };

  const user = localStorage.getItem("User");
  const bio = localStorage.getItem("Bio");
  const img = localStorage.getItem("img");

  console.log(img);

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
