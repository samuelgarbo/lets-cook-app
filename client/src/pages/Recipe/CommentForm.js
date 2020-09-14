import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import commentsAPI from "../../api/comments";
import { AuthContext } from "../../context/AuthContext";
import setInputState from "../../hooks/setInputState";

const useStyles = makeStyles((theme) => ({}));

function CommentForm({ recipe }) {
  const { user } = useContext(AuthContext);
  const [comment, setComment, resetComment] = setInputState("");
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetComment();
    const response = await commentsAPI.createComment({
      recipe,
      comment,
      user: user._id,
    });
    console.log(response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid item container direction="column" alignItems="center" xs>
        <Typography variant="h5">Add your review</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          id="comment"
          label="Comment"
          name="comment"
          value={comment}
          onChange={setComment}
        />
        <Button type="submit" variant="contained" size="small">
          Submit
        </Button>
      </Grid>
    </form>
  );
}

export default CommentForm;
