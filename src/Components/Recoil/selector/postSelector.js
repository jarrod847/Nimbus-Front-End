import Axios from "axios";
import { selector } from "recoil";
import Posts from "../atom/post";

const PostSelector = selector({
  key: "postsSelector",
  get: ({ get }) => {
    const postArray = get(Posts);
    const postLikesAmount = (users_who_liked) => {
      if (users_who_liked === null) {
        return 0;
      } else {
        return users_who_liked.length;
      }
    };
    const postRepostsAmount = (users_who_reposted) => {
      if (users_who_reposted === null) {
        return 0;
      } else {
        return users_who_reposted.length;
      }
    };
    const postAddOrRemoveLike = (post, user_id) => {};

    return {
      postLikesAmount,
      postRepostsAmount,
      postAddOrRemoveLike,
    };
  },
});

export default PostSelector;
