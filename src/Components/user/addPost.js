import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import User from "../Recoil/atom/user";

const AddPost = () => {
  const userInfo = useRecoilValue(User);
  const allPosts = useRecoilValue(Posts);
  let len = allPosts.length;
  const [newPost, setNewPost] = useState({
    id: len++,
    content: "",
    likes: 0,
    repost: 0,
    comments: {},
    user_id: userInfo.id,
  });

  const postState = useSetRecoilState(Posts);

  console.log(newPost);

  const addPost = () => {
    postState((old) => [...old, newPost]);
  };

  const postApi = () => {};
  const onChange = (e) =>
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  return (
    <div>
      <form
        className="addPost"
        onSubmit={(e) => {
          e.preventDefault();
          addPost(newPost);
          setNewPost("");
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
