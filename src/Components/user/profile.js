import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";
import { getUserPosts, getUsersComments } from "../Recoil/thunk/profileThunks";
import Post from "../timeLine/post";
import Comment from "../timeLine/comments";
import EditProfileInfo from "./editProfileForm";

const Profile = (props) => {
  const [cloudThoughts, setCloudThoughts] = useState([]);
  const [cloudComments, setCloudComments] = useState([]);
  const [switcher, setSwitcher] = useState(false);
  const [edit, setEdit] = useState(false);
  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
    window.location.reload();
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

  const changeInfo = () => {
    setEdit(!edit);
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
          <img src={userInfo.user_img} />
        </div>
        {!edit ? (
          <div className="userInfo">
            <h3>Display Name: {userInfo.displayName}</h3>
            <p>Bio: {userInfo.bio}</p>
            <Link onClick={changeInfo}>Edit Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <EditProfileInfo userInfo={userInfo} bool={setEdit} />
          </div>
        )}
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
