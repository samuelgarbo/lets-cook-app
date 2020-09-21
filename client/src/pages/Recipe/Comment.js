import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  comment: {
    paddingTop: theme.spacing(1),
  },
}));
function Comment({ val }) {
  const classes = useStyles();
  const { firstName, lastName } = val.user;
  const { comment } = val;
  const initials = firstName.split("")[0] + lastName.split("")[0];

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp">{initials.toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={comment} className={classes.comment} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default Comment;
