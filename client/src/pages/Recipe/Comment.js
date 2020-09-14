import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Comment({ comment }) {
  return <Typography variant="body1">{comment}</Typography>;
}

export default Comment;
