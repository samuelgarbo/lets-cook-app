import React from "react";
import RecipeList from "./RecipeList";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    paddingTop: theme.spacing(4)
  },
  spinner: {   
    flexDirection: "column",
    alignSelf: "center",
  },
}));
function RecipeSearch(props) {
  const { recipes, loading } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {loading && <CircularProgress className={classes.spinner} size={100} />}
      <RecipeList recipes={recipes}/>
     
    </Grid>
  );
}

export default RecipeSearch;
