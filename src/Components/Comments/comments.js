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
        <div className="userNameContainer">{userInfo.user}</div>
        <div className="likesContainer">Likes: {userInfo.likes} </div>
        <div className="repostsContainer"> Reposts : {userInfo.reposts}</div>
        <div className="commentsContainer">
          <div className="commentSection">{userInfo.text}</div>
        </div>
        <div><button className="replyButton">Reply</button></div>
        <div><button className="repliesButton">Comments</button></div>
        <div><button className="repostButton">Repost</button></div>
      

        </div>
        
       
        <div className="cloudBig">           
          <img className='cloudImg' src={userInfo.userImg}/>
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