import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Post = forwardRef(
  ({ profileImage, image, username, timestamp, message }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__top">
          <Avatar src={profileImage} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlinedIcon />
            <p>Connect</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
