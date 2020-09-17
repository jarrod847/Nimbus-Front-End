import React, { useEffect } from "react";
import "../../scss/user/timeLine.scss";
import { data } from "./data";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
// import updatePosts from "../Recoil/thunk/updatePosts";
import fetchPosts from "../Recoil/selector/postSelector";
import Axios from "axios";

const TimeLine = () => {
  const [userFeed, setUserFeed] = useRecoilState(Posts);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}post/posts`)
      .then((res) => {
        setUserFeed(res.data);
      })
      .catch((err) => console.log(err));
  }, [setUserFeed]);

  return (
    <div className="App">
      <div className="timeLine">
        <h1>User's TimeLine</h1>
      </div>
      <AddPost />
      {userFeed.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
};
export default TimeLine;
