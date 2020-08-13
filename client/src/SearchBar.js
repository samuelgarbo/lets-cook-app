import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
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
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.1)",
  },
  searchBar: {
    position: "relative",
    margin: "auto",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    title: {
      backgroundColor: theme.palette.grey[900],
      zIndex: 100,
    },
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <Grid container justify="center">
        <Grid item md={6} className={classes.searchBar}>         
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                align="center"
                gutterBottom
              >
                LET'S EAT
              </Typography>         
          <Paper elevation={3}>
            <TextField
              variant="outlined"
              placeholder="What shall we cook?"
              color="primary"
              fullWidth
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
