import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {   
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">       
        <Copyright />
      </Container>
    </footer>
  );
}
