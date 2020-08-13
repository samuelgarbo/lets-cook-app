import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from '@material-ui/core/Container'



function RecipeList(props) { 
    
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2} >
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        
      </Grid>
    </Container>
  );
}

export default RecipeList;
