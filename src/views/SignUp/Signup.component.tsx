import React from 'react';
import RouterLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container
} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import container from './Signup.container';

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
  subHeader: {
    fontSize: '20px',
    color: '#00204e',
    marginTop: '17px'
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

const SignUp = (props) => {
  const { history, onSignupStart } = props;

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
              Sign up
            </Typography>
            <Typography
              component="h2"
              className={classes.sugestion}
              gutterBottom
            >
              Manage your account and more...
            </Typography>
            <Typography
              variant="body2"
              className={classes.subHeader}
              gutterBottom
            >
              Sign up below to create your account.
            </Typography>
            <Formik
              initialValues={{
                title: 'Mr',
                email: '',
                password: '',
                fullName: '',
                role: 'client',
                phoneNumber: ''
              }}
              validationSchema={Yup.object({
                title: Yup.string().required('Title is Required'),
                fullName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('FullName is Required'),
                role: Yup.string().required('Role is Required'),
                phoneNumber: Yup.string().required('PhoneNumber is Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .required('Password Required')
                  .min(6, 'password must be minimum of 6 character')
                  .max(32, 'password must not exceed maximum of 32 characters')
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log('submit clicked!!!', values);
                onSignupStart({
                  ...values
                });
                setSubmitting(false);
              }}
            >
              <Form>
                <Field
                  component={Select}
                  fullWidth
                  variant="outlined"
                  name="title"
                  id="title"
                >
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                  <MenuItem value="Mx">Mx</MenuItem>
                </Field>
                <Field
                  className={classes.textField}
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  component={TextField}
                />

                <Field
                  component={Select}
                  fullWidth
                  variant="outlined"
                  name="role"
                  id="role"
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="YachtOwner/Manager">
                    Yacht Owner/Manager
                  </MenuItem>
                </Field>

                <Field
                  className={classes.textField}
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  variant="outlined"
                  component={TextField}
                />

                <Field
                  className={classes.textField}
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  component={TextField}
                />

                <Field
                  className={classes.textField}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  component={TextField}
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Form>
            </Formik>
            <RouterLink href="/signin">
              <Typography className={classes.link} style={{ marginTop: 40 }}>
                {'Already have an account? sign in.'}
              </Typography>
            </RouterLink>
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

export default container(SignUp);
