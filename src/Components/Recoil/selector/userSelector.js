import { selector } from "recoil";
import User from "../atom/user";

const UserSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const userData = get(User);
    const userId = userData.id;

    return {
      userId,
    };
  },
});

export default UserSelector;
