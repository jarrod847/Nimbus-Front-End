import React from "react";

const Post = ({ post }) => {
  console.log("Post", post);
  return (
    <div className="post">
      {/* <div>
        <img className="userImg" src={post.userImg} />
      </div> */}
      <div className="postContext">
        {/* <h2>{post.user}</h2> */}
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
