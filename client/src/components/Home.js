import React, { useState, useEffect } from "react";
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import API from "./config/api";
import data from "./dummyData";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from './components/ScrollTop'

const URL = API.edamamUrl;

const myPromise = new Promise((resolve) => {
  setTimeout(function () {
    resolve(data);
  }, 1000);
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: "100vh",
    backgroundColor: grey[100],
  },
  spinner: {
    flexDirection: "column",
    alignSelf: "center",
  },
  contentWrap: {
    flex: 1
  },
  footer: {  
    marginTop: 'auto'      
  },
}));
function App(props) {
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
      <ScrollTop {...props}>
        <Fab color="primary" size="big" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
