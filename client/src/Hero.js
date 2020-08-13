import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  searchBar: {
    position: "relative",
    margin: "auto",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },  
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} square>
      <div className={classes.overlay} />
      <Grid container justify="center">
        <Grid item md={6}>
          <div className={classes.searchBar}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              align="center"
              gutterBottom             
            >
              LET'S COOK!
            </Typography>
            <Paper elevation={3}>
              <TextField
                variant="outlined"
                placeholder="What shall we cook?"
                color="primary"
                fullWidth
              />              
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
