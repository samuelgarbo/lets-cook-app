import React from "react";
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import NavBar from "./components/Header/NavBar";
import SearchBar from "./components/Header/SearchBar";
import Footer from "./components/Footer";
import Recipe from "./pages/Recipe/Recipe";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";
import ScrollTop from "./components/ScrollTop";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

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


function App(props) {
  const classes = useStyles();

  return (
    <>
      <AuthProvider>
        <DataProvider>
          <CssBaseline />
          <NavBar />
          <SearchBar />
          <Grid className={classes.root} container direction="column">
            <Grid className={classes.contentWrap} container direction="column">
              <Switch>
                <Route exact path="/" component={RecipeSearch} />
                <Route exact path="/recipe/:id" component={Recipe} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
              </Switch>
            </Grid>
            <Footer className={classes.footer} />
            <ScrollTop {...props} />
          </Grid>
        </DataProvider>
      </AuthProvider>
    </>
  );
}

export default App;
