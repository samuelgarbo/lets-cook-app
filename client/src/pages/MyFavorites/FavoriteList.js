import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteCard from "./FavoriteCard";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import scrollToHome from "../../helpers/scrollToHome";

function FavoriteList(props) {
  const { favorites, setCurrentRecipe } = useContext(DataContext);
  const history = useHistory();

  const goToRecipe = (uri, recipe) => {
    setCurrentRecipe(recipe);
    //extract recipe id from uri
    const regex = /recipe\w+/;
    const found = uri.match(regex)[0];
    history.push(`/recipe/${found}`);
    scrollToHome();
  };
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid item container justify="center">
        {favorites.map((recipe) => (
          <FavoriteCard
            key={recipe.uri}
            recipe={recipe}
            goToRecipe={goToRecipe}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default FavoriteList;
