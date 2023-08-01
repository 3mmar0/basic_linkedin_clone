import {
  ChatRounded,
  Send,
  ShareRounded,
  ThumbUpAlt,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import InputIcon from "../input-icon/InputIcon";
import "./Post.css";

function post({ name, desc, mess, photo }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photo}>{name[0]}</Avatar>
        <div className="post__info">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{mess}</p>
      </div>
      <div className="post__icons">
        <InputIcon Icon={ThumbUpAlt} title="Like" color="gray" />
        <InputIcon Icon={ChatRounded} title="comment" color="gray" />
        <InputIcon Icon={ShareRounded} title="share" color="gray" />
        <InputIcon Icon={Send} title="send" color="gray" />
      </div>
    </div>
  );
}

export default post;
