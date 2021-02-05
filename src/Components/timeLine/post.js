import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Posts from "../Recoil/atom/post";
import PostSelector from "../Recoil/selector/postSelector";
import UserSelector from "../Recoil/selector/userSelector";

const Post = ({ post }) => {
  const [allPosts, setAllPosts] = useRecoilState(Posts);
  const {
    postLikesAmount,
    postRepostsAmount,
    postAddOrRemoveLike,
  } = useRecoilValue(PostSelector);
  const { userId } = useRecoilValue(UserSelector);
  const addToLikesAndRepost = () => {
    const userIndex = post.users_who_liked.indexOf(userId);
    const postIndex = allPosts.indexOf(post);
    if (post.users_who_liked.includes(userId)) {
      const usersWhoLiked = [...post.users_who_liked];
      usersWhoLiked.splice(userIndex, 1);
      const newList = replaceItem(allPosts, postIndex, {
        ...post,
        users_who_liked: usersWhoLiked,
      });
      console.log(newList);
      setAllPosts(newList);
    } else {
      const usersWhoLiked = [...post.users_who_liked, userId];
      const newList = replaceItem(allPosts, postIndex, {
        ...post,
        users_who_liked: usersWhoLiked,
      });
      console.log(newList);
      setAllPosts(newList);
    }
  };

  function replaceItem(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

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
          <button onClick={addToLikesAndRepost}>Like</button>
          <p>{postLikesAmount(post.users_who_liked)}</p>
        </span>
        <span>
          <button>Repost</button>
          <p>{postRepostsAmount(post.users_who_reposted)}</p>
        </span>
        <span>
          <button>Comments</button>
        </span>
      </div>
    </div>
  );
};

export default Post;
