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
    const anchor = document.querySelector('#search-field'); 
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
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
