import React from "react";
import "../../scss/user/timeLine.scss";
import { data } from "./data";
import Post from "./post";
import AddPost from "../user/addPost";

const TimeLine = () => {
  return (
    <div className="App">
      <div className="timeLine">
        <h1>User's TimeLine</h1>
      </div>
      <AddPost />
      {data.map((item) => (
        <Post key={item.user} post={item} />
      ))}
    </div>
  );
};
export default TimeLine;
