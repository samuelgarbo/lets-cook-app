import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return comments.map((val, idx) => (
    <Comment key={idx} comment={val.comment} />
  ));
}

export default CommentList;
