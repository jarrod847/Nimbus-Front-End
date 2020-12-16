import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import "./comments.css";
import Post from "../timeLine/post";
import Data, { data } from "../timeLine/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'





function Comments(props) {
  console.log({props})

  const userInfo=data[0]
  console.log(userInfo)
  return (
    <div>
      <div className='cloudContainer'>
        <div className='cloud'></div>
        <div className="cloudBottom"></div>
        <div className="cloudBottom2">
          
        </div>
        
       
        <div className="cloudBig">
           
          <img className='cloudImg' src={userInfo.userImg} />
          </div>
          <div className="cloudSmall">
            <button><FontAwesomeIcon className="thumbsUp" icon={faThumbsUp} /></button>
          </div>
          <div className="cloudExSmall">
          <button> <FontAwesomeIcon className="thumbsDown" icon={faThumbsDown} /></button>
          </div>
        
        
      </div>



    </div>


  );
}


export default Comments;