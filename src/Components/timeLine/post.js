import React from "react";
import { useRecoilValue } from "recoil";
import PostSelector from "../Recoil/selector/postSelector";
import UserSelector from "../Recoil/selector/userSelector";

const Post = ({ post }) => {
  const { postLikes, postReposts } = useRecoilValue(PostSelector);
  const { userId } = useRecoilValue(UserSelector);
  const addToLikesAndRepost = () => {};
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
          <p>{postLikes(post.users_who_liked)}</p>
        </span>
        <span>
          <button>Repost</button>
          <p>{postReposts(post.users_who_reposted)}</p>
        </span>
        <span>
          <button>Comments</button>
        </span>
      </div>
    </div>
  );
};

export default Post;
