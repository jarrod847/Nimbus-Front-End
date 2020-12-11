import Axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import User from "../Recoil/atom/user";

const AddPost = () => {
  const userInfo = useRecoilValue(User);
  const [newPost, setNewPost] = useState({
    content: "",
    likes: 0,
    reposts: 0,
    user_id: userInfo.id,
  });

  const postState = useSetRecoilState(Posts);

  const addPost = () => {
    postState((old) => [...old, newPost]);
  };

  const postApi = () => {
    Axios.post(`${process.env.REACT_APP_API_URL}post/sendpost`, newPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const onChange = (e) =>
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  return (
    <div>
      <form
        className="addPost"
        onSubmit={(e) => {
          e.preventDefault();
          addPost(newPost);
          postApi();
        }}
      >
        <h3>Speak your mind</h3>
        <span>
          Thoughts:
          <input name="content" value={newPost.content} onChange={onChange} />
          <button>Post</button>
        </span>
      </form>
    </div>
  );
};

export default AddPost;
