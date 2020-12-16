import AxiosWithUrl from "../../utilities/axiosWithUrl";

export const getUserPosts = (userId, setCloudThoughts) => async () => {
  try {
    const { data } = await AxiosWithUrl().get(`/post/userposts/${userId}`);
    setCloudThoughts(data);
  } catch (e) {
    console.log(e);
  }
};

export const getUsersComments = (userId, setComments) => async () => {
  try {
    const { data } = await AxiosWithUrl().get(`/comment/user/${userId}`);
    setComments(data);
  } catch (e) {
    console.log(e);
  }
};
