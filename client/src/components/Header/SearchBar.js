import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
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
    backgroundColor: "rgba(255,255,255,.1)",
  },
  searchBar: {
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
  logoContainer: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  logo: {
    [theme.breakpoints.down("xl")]: {
      width: "300px",
      height: "90px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <Grid
        container
        justify="center"
        className={classes.searchBar}
        id="back-to-top-anchor"
      >
        <Grid
          item
          container
          justify="center"
          xs={12}
          className={classes.logoContainer}
        >
          <Logo className={classes.logo} />
        </Grid>
        <Grid item xs={10} md={6} id="search-field">
          <Paper>
            <TextField
              variant="outlined"
              placeholder="What shall we cook?"
              color="primary"
              fullWidth
              autoFocus
              
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
