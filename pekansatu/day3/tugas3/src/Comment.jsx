import React from "react";
import Avatar from "./components/Avatar";
import UserInfo from "./components/UserInfo";
import CommentText from "./components/CommentText";

function Comment({ user, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Avatar src={user.avatar} alt={user.name} />
      <div>
        <UserInfo name={user.name} />
        <CommentText text={text} />
      </div>
    </div>
  );
}

export default Comment;