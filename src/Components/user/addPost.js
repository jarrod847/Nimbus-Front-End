import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import Posts from "../Recoil/atom/post";

const AddPost = () => {
  const [newPost, setNewPost] = useState("");

  const postState = useSetRecoilState(Posts);

  //   let id = length.postState;
  let id = 0;

  const addPost = () => {
    postState((old) => [
      ...old,
      {
        id: id++,
        content: newPost,
        likes: 0,
        repost: 0,
        comments: {},
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
        <h3>To the cloud</h3>
        <span>
          Thoughts:
          <input value={newPost} type="text" onChange={onChange} />
          <button>Post</button>
        </span>
      </form>
    </div>
  );
};

export default AddPost;
