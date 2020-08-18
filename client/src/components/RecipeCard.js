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
  root: {
    maxWidth: 250,
    margin: theme.spacing(1),
  },  
  media: {
    width: 250,
    height: 170,
  },
  clickable: {
    cursor: "pointer",
  },
}));

function RecipeCard({ recipe }) {
  const classes = useStyles();
  const { label, image } = recipe.recipe;

  return (
    
    <Card className={classes.root} elevation={5}>
      <CardActionArea>
        <CardMedia image={image} title={label} className={classes.media} />
        <CardContent>
          <Typography align="center">{label}</Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default RecipeCard;
