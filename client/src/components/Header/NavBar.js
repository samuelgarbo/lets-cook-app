import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    textDecoration: "none",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(236,239,241,.7)",
  },
  logo: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    height: "50px",
    width: "100px",
  },
}));

function NavBar({ history, location }) {
  const classes = useStyles();
  const { auth, setAuth, setUser } = useContext(AuthContext);
  const { getFavorites, setFavorites } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyFavorites = () => {
    handleClose();
    getFavorites();
    history.push("/myfavorites");
  };
  const handleLogOut = () => {
    handleClose();
    setAuth(false);
    setUser({});
    setFavorites([]);
    if (location.pathname === "/myfavorites") history.push("/");
  };

  const handleSignIn = () => {
    handleClose();
    history.push("/signin");
  };

  const handleSignUp = () => {
    handleClose();
    history.push("/signup");
  };

  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Fade in={trigger}>
        <div className={classes.overlay} />
      </Fade>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Logo className={classes.logo} />
        </Link>
        {auth ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleMyFavorites}>My Favorites</MenuItem>
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <Hidden xsDown>
              <Link to="/signup" className={classes.button}>
                <Button variant="contained" color="secondary" size="small">
                  Sign up
                </Button>
              </Link>
              <Link to="/signin" className={classes.button}>
                <Button variant="contained" color="primary" size="small">
                  Sign In
                </Button>
              </Link>
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
                <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
              </Menu>
            </Hidden>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default withRouter(NavBar);
