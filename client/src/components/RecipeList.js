import React from "react";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from '@material-ui/core/Container'


function RecipeList({recipes}) { 
    
  return (  
    <Container>
      <Grid item container spacing={2} justify='center'  >          
          {recipes.map(recipe => <RecipeCard key={recipe.recipe.uri} recipe={recipe} />)}        
      </Grid>

    </Container>
    
  );
}

export default RecipeList;
