import React, { useEffect } from "react";
import Post from "./post";
import AddPost from "../user/addPost";
import { useRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import Axios from "axios";
import User from "../Recoil/atom/user";

const TimeLine = () => {
  const [userFeed, setUserFeed] = useRecoilState(Posts);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}post/posts`)
      .then((res) => {
        setUserFeed(res.data);
      })
      .catch((err) => console.log(err));
  }, [setUserFeed]);

  console.log(userFeed);
  const userInfo = useRecoilValue(User);

  return (
    <div className="timeLine">
      <AddPost />
      <div className="timeLineHeader">
        <h1>User's TimeLine</h1>
      </div>
      <div className="timeLinePosts">
        {userFeed.map((item) => (
          <Post key={item.id} post={item} user={userInfo} />
        ))}
      </div>
    </div>
  );
};
export default TimeLine;
