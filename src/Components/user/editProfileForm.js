import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import { editUserInfo } from "../Recoil/thunk/profileThunks";
import AxiosWithUrl from "../utilities/axiosWithUrl";

const EditProfileInfo = ({ userInfo, bool }) => {
  const [newInfo, setNewinfo] = useRecoilState(User);
  const [info, setInfo] = useState({
    displayName: userInfo.displayName,
    password: userInfo.password,
    bio: userInfo.bio,
    img: userInfo.img,
    id: userInfo.id,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const setToFalse = () => {
    editUserInfo(userInfo.id, setNewinfo, info)();
    bool(false);
    console.log(newInfo);
  };

  return (
    <div>
      <div>
        <label>Display Name</label>
        <input
          name="displayName"
          value={info.displayName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bio</label>
        <input name="bio" value={info.bio} onChange={handleChange} />
      </div>
      <div>
        <label>Picture</label>
        <input name="img" value={info.img} onChange={handleChange} />
      </div>
      <button onClick={setToFalse}>Done</button>
    </div>
  );
};

export default EditProfileInfo;
