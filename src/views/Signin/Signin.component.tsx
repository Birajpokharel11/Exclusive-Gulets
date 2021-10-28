import React from 'react';
import RouterLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import container from './Signin.container';
import { useRouter } from 'next/router';

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
    top: '40px',
    [theme.breakpoints.down('xs')]: {
      left: '30px',
      top: '40px'
    }
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    padding: '0 200px 135px 280px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 20px 13px 28px'
    }
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
    color: '#808fa7',
    cursor: 'pointer'
  }
}));

const SignIn = (props) => {
  const {
    history,
    onSigninStart,
    auth: { loading }
  } = props;
  const router = useRouter();
  const classes = useStyles();

  const handleBack = () => {
    router.push('/');
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
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .required('Password Required')
                  .min(6, 'password must be minimum of 6 character')
                  .max(32, 'password must not exceed maximum of 32 characters')
              })}
              onSubmit={(values, { setSubmitting }) => {
                onSigninStart({
                  ...values,
                  grant_type: 'password',
                  client_id: 'yatch',
                  client_secret: 132435468,
                  scope: 'read'
                });
                setSubmitting(false);
              }}
            >
              <Form className={classes.form}>
                <Field
                  variant="outlined"
                  margin="normal"
                  name="email"
                  id="email"
                  label="Email Address"
                  fullWidth
                  component={TextField}
                  className={classes.textField}
                />

                <Field
                  component={TextField}
                  variant="outlined"
                  margin="normal"
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  className={classes.textField}
                />

                <Button
                  className={classes.signInButton}
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Typography variant="body1" color="secondary">
                      Sign in
                    </Typography>
                  )}
                </Button>
              </Form>
            </Formik>
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

export default container(SignIn);
