import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import scrollToHome from "../../helpers/scrollToHome";

function RecipeList(props) {
  const { recipes, setCurrentRecipe } = useContext(DataContext);
  const history = useHistory();

  const goToRecipe = (uri, recipe) => {
    setCurrentRecipe(recipe);
    //extract recipe id from uri
    const regex = /recipe\w+/;
    const found = uri.match(regex)[0];
    history.push(`/recipe/${found}`);
    scrollToHome();
  };

  return recipes.length === 0 ? (
    <Redirect to="/" />
  ) : (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid item container justify="center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.uri}
            recipe={recipe}
            goToRecipe={goToRecipe}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
