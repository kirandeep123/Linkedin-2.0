import { Avatar } from "@mui/material";
import React from "react";
import "./styles/post.css";
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import { SendOutlined, ShareOutlined, ChatOutlined } from "@mui/icons-material";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOptions Icon ={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
        <InputOptions Icon ={ChatOutlined} title="Comment" color="gray"/>

        <InputOptions Icon ={ShareOutlined} title="Share" color="gray"/>
        <InputOptions Icon ={SendOutlined} title="Send" color="gray"/>

      </div>
    </div>
  );
}

export default Post;
