import React from "react";

const EditProfileInfo = ({ userInfo }) => {
  return (
    <div>
      <div>
        <label>Display Name</label>
        <input value={userInfo.displayName} />
      </div>
      <div>
        <label>Bio</label>
        <input value={userInfo.bio} />
      </div>
      <div>
        <label>Picture</label>
        <input value={userInfo.bio} />
      </div>
    </div>
  );
};

export default EditProfileInfo;
