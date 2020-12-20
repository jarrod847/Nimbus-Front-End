import AxiosWithUrl from "../../utilities/axiosWithUrl";

export const LoginToApi = (userCred, state) => async () => {
  await AxiosWithUrl()
    .post("/user/login", userCred)
    .then((res) => {
      state(res.data.user);
    })
    .catch((err) => console.log(err));
};

export const SignUpApi = (userInfo, profile) => async () => {
  AxiosWithUrl()
    .post("/user/register", userInfo)
    .then((res) => {
      profile(res.data);
    })
    .catch((err) => console.log(err));
};
