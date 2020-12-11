const { atom } = require("recoil");

const User = atom({
  key: "user",
  default: {},
});

export default User;
