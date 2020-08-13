import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, blue, green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function RecipeCard({ recipe }) {
  const classes = useStyles();
  const { label, image, totalTime } = recipe.recipe;

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      container
      justify="space-evenly"
      alignItems="center"
    >
      <Paper>
        <img src={image}></img>
      </Paper>
      {/* <Card className={classes.card}>
        <CardActionArea>
          <CardHeader          
            title={label}
          />      
          <CardMedia
            className={classes.media}
            image={image}
            title={label}
          />

        </CardActionArea>
      </Card> */}
    </Grid>
  );
}

export default RecipeCard;
