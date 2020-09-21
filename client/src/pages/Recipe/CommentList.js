import React from "react";
import Comment from "./Comment";
import List from "@material-ui/core/List";

function CommentList({ comments }) {
  return (
    <List>
      {comments.map((val, idx) => (
        <Comment key={idx} val={val} />
      ))}
    </List>
  );
}

export default CommentList;
