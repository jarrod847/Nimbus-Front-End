import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div>
        <img className="userImg" src={post.user_img} />
      </div>
      <div className="postContext">
        <h2>{post.displayName}</h2>
        <p>{post.content}</p>
      </div>
      <div className="postInteraction">
        <span>
          <button>Like</button>
          <p>{post.likes}</p>
        </span>
        <span>
          <button>Repost</button>
          <p>{post.reposts}</p>
        </span>
        <span>
          <button>Comments</button>
        </span>
      </div>
    </div>
  );
};

export default Post;
