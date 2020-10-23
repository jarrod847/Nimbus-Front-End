import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <h1>{}</h1>
      <p>{comment.content}</p>
      <p>{comment.likes}</p>
      <p>{comment.reposts}</p>
    </div>
  );
};

export default Comment;
