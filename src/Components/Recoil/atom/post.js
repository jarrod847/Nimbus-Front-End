const { atom } = require("recoil");

const Posts = atom({
  key: "post",
  default: {},
});

export default Posts;
