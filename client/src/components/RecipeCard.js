import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

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
