import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "../../context/DataContext";
import { makeStyles } from "@material-ui/core/styles";

const foods = ["beef", "pork", "fish", "chicken", "fruit", "vegetables"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  title: {
    margin: theme.spacing(4),
  },
  paper: {
    display: "flex",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Home({ history }) {
  const classes = useStyles();
  const { fetchRecipes } = useContext(DataContext);
  const handleClick = (e) => {
    fetchRecipes(e.target.id);
    history.push("/recipes");
  };
  return (
    <>
      <Typography variant="h6" align="center" className={classes.title}>
        What to cook?
      </Typography>
      <Grid container spacing={2} justify="center" className={classes.root}>
        {foods.map((food) => (
          <Grid key={food} item xs={5} sm={3} md={2} onClick={handleClick}>
            <Paper className={classes.paper} id={food}>
              {food.toUpperCase()}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
