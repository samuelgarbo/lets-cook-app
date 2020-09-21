import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    margin: theme.spacing(1),
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      margin: "2px",
    },
  },
  media: {
    width: 250,
    height: 170,
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 136,
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 102,
    },
  },
  title: {
    padding: theme.spacing(1),
  },
}));

function FavoriteCard({ recipe, goToRecipe }) {
  const classes = useStyles();
  const { label, image } = recipe;

  const handleGoToRecipe = () => {
    let uri = recipe.uri;
    goToRecipe(uri, recipe);
  };

  return (
    <Card className={classes.root} elevation={5} onClick={handleGoToRecipe}>
      <CardActionArea>
        <CardMedia image={image} title={label} className={classes.media} />
        <CardContent classes={{ root: classes.title }}>
          <Typography align="center" variant="subtitle2">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FavoriteCard;
