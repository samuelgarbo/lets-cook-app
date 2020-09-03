import React, { useContext } from "react";
import RecipeList from "./RecipeList";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../context/DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(4),
  },
  spinner: {
    flexDirection: "column",
    alignSelf: "center",
  },
}));
function RecipeSearch(props) {
  const { loading } = useContext(DataContext);
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {loading && <CircularProgress className={classes.spinner} size={100} />}
      <RecipeList />
    </Grid>
  );
}

export default RecipeSearch;
