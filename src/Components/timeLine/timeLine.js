import React, { useEffect } from "react";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import Axios from "axios";
import User from "../Recoil/atom/user";
import AxiosWithUrl from "../utilities/axiosWithUrl";

const TimeLine = () => {
  const [userFeed, setUserFeed] = useRecoilState(Posts);
  useEffect(() => {
    AxiosWithUrl()
      .get("/post")
      .then((res) => {
        setUserFeed(res.data);
      })
      .catch((err) => console.log(err));
  }, [setUserFeed]);

  const reversedArray = [...userFeed].reverse();
  const userInfo = useRecoilValue(User);

  return (
    <div className="timeLine">
      <AddPost />
      <div className="timeLineHeader">
        <h1>User's TimeLine</h1>
      </div>
      <div className="timeLinePosts">
        {reversedArray.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
};
export default TimeLine;
