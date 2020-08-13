import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, blue, green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    cursor: "pointer",    
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatarMeat: {
    backgroundColor: red[100],
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
  avatarFish: {
    backgroundColor: blue[100],
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
  avatarVeggie: {
    backgroundColor: green[100],
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
}));

function RecipeCard() {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      container
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <AvatarGroup max={4}>
              <Avatar
                aria-label="contains meat"
                className={classes.avatarMeat}
                src="https://img.icons8.com/carbon-copy/100/000000/steak-rare.png"
              />
              <Avatar
                aria-label="contains shrimp"
                className={classes.avatarFish}
                src="https://img.icons8.com/carbon-copy/100/000000/prawn.png"
              />
              <Avatar
                aria-label="vegetarian"
                className={classes.avatarVeggie}
                src="https://img.icons8.com/pastel-glyph/64/000000/beetroot-and-carrot-1.png"
              />
            </AvatarGroup>
          }
          title="Shrimp and Chorizo Paella"
        />      
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1588276552401-30058a0fe57b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80"
          title="Paella dish"
        />
      </Card>
    </Grid>
  );
}

export default RecipeCard;
