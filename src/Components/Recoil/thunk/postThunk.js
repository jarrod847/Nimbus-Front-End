import AxiosWithUrl from "../../utilities/axiosWithUrl";

export const sendPostApi = (info) => async () => {
  try {
    await AxiosWithUrl().post(`/post/sendpost`, info);
  } catch (e) {
    console.log(e);
  }
};
