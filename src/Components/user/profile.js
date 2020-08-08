import React from "react";

const Profile = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
    window.location.reload();
  };

  const user = localStorage.getItem("User");
  const bio = localStorage.getItem("Bio");

  console.log(bio);

  return (
    <div className="profile">
      <h3>Display Name: {user}</h3>
      <p>Bio: {bio}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
