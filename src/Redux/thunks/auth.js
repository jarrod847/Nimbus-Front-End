import { axiosBaseUrl } from "../../utils/axiosBaseURL";
import { setUserInfo, setAuthError } from "../slices/authSlice";

export const login = (values, push) => async (dispatch) => {
  try {
    const { data } = await axiosBaseUrl().post("/user/login", values);
    localStorage.setItem("token", res.data.payload);
    localStorage.setItem("displayName", res.body.displayName);
    dispatch(setUserInfo(data));
    push("/profile");
  } catch {}
};
