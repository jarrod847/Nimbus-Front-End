import React from "react";
import "../../scss/user/timeLine.scss";
import { data } from "./data";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
// import updatePosts from "../Recoil/thunk/updatePosts";
import fetchPosts from "../Recoil/selector/postSelector";

const TimeLine = () => {
  const allPosts = useRecoilValue(Posts);

  return (
    <div className="App">
      <div className="timeLine">
        <h1>User's TimeLine</h1>
      </div>
      <AddPost />
      {allPosts.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </div>
  );
};
export default TimeLine;
