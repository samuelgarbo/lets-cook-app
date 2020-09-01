import React, { useState, useEffect } from "react";
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Recipe from "./pages/Recipe/Recipe";
import data from "./dummyData";
import API from "./config/api";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import ScrollTop from "./components/ScrollTop";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: grey[100],
  },
  contentWrap: {
    flex: 1,
  },
  footer: {
    marginTop: "auto",
  },
}));

const URL = API.edamamUrl;

const myPromise = new Promise((resolve) => {
  setTimeout(function () {
    resolve(data);
  }, 1000);
});

function App(props) {
  const [auth, setAuth] = React.useState(true);
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
      <NavBar auth={auth} setAuth={setAuth} />
      <SearchBar />
      <Grid className={classes.root} container direction="column">
        <Grid className={classes.contentWrap} container direction="column" >
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <RecipeSearch
                  loading={loading}
                  recipes={recipes}
                  auth={auth}
                  setAuth={setAuth}
                />
              )}
            />
            <Route
              exact
              path="/recipe/:id"
              render={() => <Recipe recipes={[...data.hits]} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <SignUp auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/signin"
              render={() => <SignIn auth={auth} setAuth={setAuth} />}
            />
          </Switch>
        </Grid>
        <Footer className={classes.footer} />
        <ScrollTop {...props}/>
      </Grid>
    </>
  );
}

export default App;
