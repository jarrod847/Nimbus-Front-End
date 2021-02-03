import { prependOnceListener } from "process";
import AxiosWithUrl from "../../utilities/axiosWithUrl";

export const LoginToApi = (userCred, state, push) => async () => {
  await AxiosWithUrl()
    .post("/user/login", userCred)
    .then((res) => {
      state(res.data.user);
      push("/profile");
    })
    .catch((err) => {
      alert("Wrong Info");
      console.log(err);
    });
};

export const SignUpApi = (userInfo, profile) => async () => {
  AxiosWithUrl()
    .post("/user/register", userInfo)
    .then((res) => {
      profile(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
