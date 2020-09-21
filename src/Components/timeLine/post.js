import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <div>
        <img className="userImg" src={post.img} />
      </div>
      <div className="postContext">
        <h2>{post.displayName}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
