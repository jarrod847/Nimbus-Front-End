import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import User from "../Recoil/atom/user";

const EditProfileInfo = ({ userInfo, bool }) => {
  const setNewinfo = useSetRecoilState(User);
  const [info, setInfo] = useState({
    displayName: userInfo.displayName,
    bio: userInfo.bio,
    img: userInfo.img,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const setToFalse = () => {
    setNewinfo(info);
    bool(false);
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
