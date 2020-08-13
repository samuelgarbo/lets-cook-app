import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from '@material-ui/core/Container'


function RecipeList({recipes}) { 
    
  return (  
      <Grid item container spacing={2}>          
          {recipes.map(recipe => <RecipeCard key={recipe.recipe.uri} recipe={recipe} />)}        
      </Grid>
    
  );
}

export default RecipeList;
