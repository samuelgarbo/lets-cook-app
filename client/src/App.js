import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import RecipeList from "./RecipeList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import API from "./config/api";
import data from "./dummyData";
import { FormHelperText } from "@material-ui/core";

const URL = API.edamamUrl;

const myPromise = new Promise((resolve) => {
  setTimeout(function () {
    resolve(data);
  }, 5000);
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: grey[100],
  },
  spinner: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  contentWrap: {
    flex: 1
  },
  footer: {    
    position: "relative",
    bottom: 0,
  },
}));
function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    // fetch(URL)
    myPromise
      // .then((response) => response.json())
      .then((data) => setRecipes([...data.hits]))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <CssBaseline />
      <Grid className={classes.root} container direction="column" >
        <Grid className={classes.contentWrap} container direction="column">
        <NavBar />
        <SearchBar />
          {loading && (
            <CircularProgress className={classes.spinner} size={100} />
          )}
          <RecipeList recipes={recipes} />
        </Grid>
        <Footer className={classes.footer} />
      </Grid>
    </>
  );
}

export default App;
