import React from "react";

const Comment = ({ comment, user }) => {
  return (
    <div>
      <h1>{user.displayName}</h1>
      <p>{comment.content}</p>
      <p>{comment.likes}</p>
      <p>{comment.reposts}</p>
    </div>
  );
};

export default Comment;
