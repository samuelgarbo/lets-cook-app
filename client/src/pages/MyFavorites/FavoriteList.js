import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteCard from "./FavoriteCard";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

function FavoriteList(props) {
  const { favorites } = useContext(DataContext);
  const history = useHistory();

  const goToRecipe = (id) => {
    history.push(`/recipe/${id}`);
    const anchor = document.querySelector("#search-field");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
