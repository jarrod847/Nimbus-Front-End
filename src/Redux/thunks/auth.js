import { axiosBaseUrl } from "../../utils/axiosBaseURL";
import { setUserInfo, setAuthError } from "../slices/authSlice";
import axios from "axios";

export const login = (creds) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/login`,
      creds
    );
    localStorage.setItem("token", data.token);
    localStorage.setItem("displayName", data.user.displayName);
  } catch {}
};
