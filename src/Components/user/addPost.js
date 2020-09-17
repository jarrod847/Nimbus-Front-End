import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import User from "../Recoil/atom/user";

const AddPost = () => {
  const [newPost, setNewPost] = useState("");

  const postState = useSetRecoilState(Posts);
  const allPosts = useRecoilValue(Posts);
  let len = allPosts.length;
  const userInfo = useRecoilValue(User);
  console.log(userInfo);

  const addPost = () => {
    postState((old) => [
      ...old,
      {
        id: len++,
        content: newPost,
        likes: 0,
        repost: 0,
        comments: {},
        user_id: userInfo.id,
      },
    ]);
  };
  const onChange = (e) => setNewPost(e.target.value);
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
          <input value={newPost} onChange={onChange} />
          <button>Post</button>
        </span>
      </form>
    </div>
  );
};

export default AddPost;
