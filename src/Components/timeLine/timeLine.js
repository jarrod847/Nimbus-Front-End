import React from "react";
import "../../scss/user/timeLine.scss";
import { data } from "./data";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import updatePosts from "../Recoil/thunk/updatePosts";

const TimeLine = () => {
  const allPosts = useRecoilValue(Posts);
  console.log(allPosts);
  updatePosts();
  return (
    <div className="App">
      <div className="timeLine">
        <h1>User's TimeLine</h1>
      </div>
      <AddPost />
      {allPosts.map((item, index) => (
        <Post key={index} post={item} />
      ))}

      {/* {data.map((item) => (
        <Post key={item.user} post={item} />
      ))} */}
    </div>
  );
};
export default TimeLine;
