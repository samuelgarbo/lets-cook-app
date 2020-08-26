import React from "react";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import {useHistory} from 'react-router-dom';

function RecipeList(props) {
  const {recipes} = props;
  const history = useHistory();
  
  const goToRecipe = (id) => {
    history.push(`/recipe/${id}`)
  };
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid item container justify="center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} goToRecipe={goToRecipe} />
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
