import React from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {   
 
  },
  title:{
   
  }
}));
function Recipe(props) {
  const { recipes } = props;
  const { id } = useParams();

  const classes = useStyles();

  let recipe = recipes.filter((recipe) => {
    let name = recipe.recipe.label
      .replace(/\s/g, "-")
      .replace(/[()]/g, "")
      .toLowerCase();
    return name === id;
  });

  const {
    label,
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
  } = recipe[0].recipe;
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <Grid item xs>
          <Typography variant="h4" component="h1" align='center' className={classes.title}>
            {label}
          </Typography>
        </Grid>
        <Grid item xs >
          <img src={image} />
        </Grid>
        <Grid item xs>
          Total time: {totalTime}
        </Grid>
        <Grid item xs>
          Yield: {recipe[0].recipe["yield"]}
        </Grid>
        <Grid item xs>
          Ingredients:{" "}
          {ingredientLines.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Recipe;
