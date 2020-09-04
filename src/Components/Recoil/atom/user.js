const atom = require("recoil");

const User = atom({
  key: "user",
  default: {
    info: [],
    posts: [],
    repost: [],
    likes: [],
  },
});

export default User;
