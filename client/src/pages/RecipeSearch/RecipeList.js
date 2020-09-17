import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

function RecipeList(props) {
  const { recipes, setCurrentRecipe } = useContext(DataContext);
  const history = useHistory();

  const goToRecipe = (id, recipe) => {
    setCurrentRecipe(recipe);
    history.push(`/recipe/${id}`);
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid item container justify="center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.uri}
            recipe={recipe.recipe}
            goToRecipe={goToRecipe}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
