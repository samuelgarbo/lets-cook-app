import React from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from './Footer';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  root: {
   backgroundColor: grey[100]
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <RecipeList />
      <Footer/>
    </div>
  );
}

export default App;
