import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";
import { getUserPosts, getUsersComments } from "../Recoil/thunk/profileThunks";
import Post from "../timeLine/post";

const Profile = (props) => {
  const [cloudThoughts, setCloudThoughts] = useState([]);
  const [cloudComments, setCloudComments] = useState([]);
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };
  const userInfo = useRecoilValue(User);
  const userId = userInfo.id;

  useEffect(() => {
    getUserPosts(userId, setCloudThoughts)();
    getUsersComments(userId, setCloudComments)();
  }, [userId]);

  return (
    <div>
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
      <div className="profileSwitcher">
        <h3>Posts</h3>
        <h3>Comments</h3>
      </div>
      <div className="UsersPosts">
        {cloudThoughts.map((posts) => (
          <Post key={posts.id} post={posts} user={userInfo} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
