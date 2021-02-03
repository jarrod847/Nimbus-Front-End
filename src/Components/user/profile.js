import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";
import { getUserPosts, getUsersComments } from "../Recoil/thunk/profileThunks";
import Post from "../timeLine/post";
import Comment from "../timeLine/comments";

const Profile = (props) => {
  const [cloudThoughts, setCloudThoughts] = useState([]);
  const [cloudComments, setCloudComments] = useState([]);
  const [switcher, setSwitcher] = useState(false);
  const [edit, setEdit] = useState(false);
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

  const ChangeSwitcher = () => {
    if (!switcher) {
      setSwitcher(true);
    } else {
      setSwitcher(false);
    }
  };

  const displayContent = () => {
    if (!switcher) {
      return (
        <div className="UsersPosts">
          {cloudThoughts.map((posts) => (
            <Post key={posts.id} post={posts} user={userInfo} />
          ))}
        </div>
      );
    } else if (switcher) {
      return (
        <div className="UserPosts">
          {cloudComments.map((comms) => (
            <Post key={comms.id} user={userInfo} post={comms} />
          ))}
        </div>
      );
    }
  };

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
        <h3 onClick={ChangeSwitcher}>Posts</h3>
        <h3 onClick={ChangeSwitcher}>Comments</h3>
      </div>
      {displayContent()}
    </div>
  );
};

export default Profile;
