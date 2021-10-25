import React from 'react';
import RouterLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';

import BackArrow from '@modules/icons/BackArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '80px 0 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '60px 0'
    }
  },
  grid: {
    height: '100%'
  },
  imgContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    position: 'absolute',
    left: '100px',
    top: '40px'
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    padding: '0 200px 135px 280px'
  },
  title: {
    height: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#ff9536',
    marginBottom: '31px',
    marginTop: '142px'
  },
  sugestion: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '56px',
    color: '#00204e',
    marginBottom: 0
  },
  form: {
    marginTop: '51px'
  },

  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  link: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '150%',
    textDecoration: 'underline',
    color: '#808fa7'
  }
}));

const SignIn = (props) => {
  const { history } = props;

  const classes = useStyles();

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = (event) => {
    event.persist();
  };

  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.contentHeader}>
            <IconButton onClick={handleBack} style={{ padding: 0 }}>
              <BackArrow />
            </IconButton>
          </div>
          <div className={classes.contentBody}>
            <Typography className={classes.title} variant="h2">
              Sign in
            </Typography>
            <Typography
              component="h2"
              className={classes.sugestion}
              gutterBottom
            >
              Please log in to manage your account
            </Typography>
            <form className={classes.form} onSubmit={handleSignIn}>
              <TextField
                className={classes.textField}
                fullWidth
                label="Email address"
                name="email"
                onChange={handleChange}
                type="text"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                variant="outlined"
              />
              <Button
                className={classes.signInButton}
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in
              </Button>
            </form>
            <RouterLink href="/signup">
              <Typography className={classes.link} style={{ marginTop: 40 }}>
                {"Don't have an account. Create one here."}
              </Typography>
            </RouterLink>
            <a href="https://app.exclusivegulets.com/users/password/new">
              <Typography className={classes.link} style={{ marginTop: 20 }}>
                {'Forgot your password.'}
              </Typography>
            </a>
          </div>
        </Grid>
        <Grid className={classes.imgContainer} item lg={5}>
          <img
            src="/assets/images/SignIn/Hero-bg.jpg"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
