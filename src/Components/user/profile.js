import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import User from "../Recoil/atom/user";
import Post from "../timeLine/post";
import AxiosWithUrl from "../utilities/axiosWithUrl";

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
    AxiosWithUrl()
      .get(`/post/userposts/${userId}`)
      .then((res) => {
        const UserPostData = res.data;
        setCloudThoughts(UserPostData.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    AxiosWithUrl()
      .get(`/comment/user/${userId}`)
      .then((res) => {
        const UserCommentsData = res.data;
        setCloudComments(UserCommentsData.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(cloudComments);

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
      <div className="UsersPosts">
        {cloudThoughts.map((posts) => (
          <Post key={posts.id} post={posts} user={userInfo} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
