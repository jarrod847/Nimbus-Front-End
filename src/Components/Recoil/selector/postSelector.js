import Axios from "axios";
import { selector } from "recoil";

const FetchPosts = selector({
  key: "postsSelector",
  get: async ({ get }) => {
    try {
      const data = await Axios.get("localhost:7000/post/posts");
      return data;
    } catch (error) {
      throw error;
    }
  },
});

export default FetchPosts;
