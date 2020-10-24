import React from "react";

const Post = ({ post, user }) => {
  return (
    <div className="post">
      <div>
        <img className="userImg" src={user.img} />
      </div>
      <div className="postContext">
        <h2>{user.displayName}</h2>
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
