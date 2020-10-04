import React, { useEffect } from "react";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilState } from "recoil";
import Posts from "../Recoil/atom/post";
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
    <div>
      <AddPost />
      <div className="timeLineHeader">
        <h1>User's TimeLine</h1>
      </div>
      {userFeed.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
};
export default TimeLine;
