import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import "./comments.css";
import Post from "../timeLine/post";
import Data, { data } from "../timeLine/data";
import Profile from "./Components/user/profile";




function Comments(props) {
  console.log({props})

  const userInfo=data
  return (
    <div>
      <div className='cloudContainer'>
        <div className='cloud'></div>
        <div className="cloudBottom"></div>
        <div className="cloudBig">
          <img src={data.userImg} />
          </div>
        <div className="cloudSmall"></div>
        <div className="cloudExSmall"></div>
      </div>



    </div>


  );
}


export default Comments;