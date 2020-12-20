import AxiosWithUrl from "../../utilities/axiosWithUrl";

export const LoginToApi = (userCred, state) => async () => {
  await AxiosWithUrl()
    .post("/user/login", userCred)
    .then((res) => {
      state(res.data.user);
    })
    .catch((err) => console.log(err));
};
