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
  Container,
  Divider,
  InputAdornment,
  CircularProgress
} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import container from './Signup.container';
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
    color: '#808fa7',
    cursor: 'pointer'
  },
  formSeparator: {
    marginTop: '4rem'
  },
  divider: {
    height: 41,
    margin: 4,
    width: 1,
    backgroundColor: 'rgb(204, 204, 204)'
  }
}));

const SignUp = (props) => {
  const {
    history,
    onSignupStart,
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
        <Grid className={classes.content} item lg={6} xs={12}>
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
                roleGroupId: 1,
                phoneNumber: ''
              }}
              validationSchema={Yup.object({
                title: Yup.string().required('Title is Required'),
                fullName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('FullName is Required'),
                roleGroupId: Yup.string().required('Role is Required'),
                phoneNumber: Yup.string().required('PhoneNumber is Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is Required'),
                password: Yup.string()
                  .required('Password is Required')
                  .min(6, 'password must be minimum of 6 character')
                  .max(32, 'password must not exceed maximum of 32 characters'),
                password2: Yup.lazy(() => {
                  return Yup.string()
                    .required('Please add your confirm password')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match');
                })
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log('submit clicked!!!', values);
                onSignupStart({
                  ...values
                });
                setSubmitting(false);
              }}
            >
              <Form className={classes.formSeparator}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      component={Select}
                      fullWidth
                      variant="outlined"
                      name="title"
                      id="title"
                      endAdornment={
                        <InputAdornment
                          position="start"
                          style={{ paddingRight: '20px' }}
                        >
                          <Divider
                            className={classes.divider}
                            orientation="vertical"
                          />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="Mrs">Mrs</MenuItem>
                      <MenuItem value="Mr">Mr</MenuItem>
                      <MenuItem value="Ms">Ms</MenuItem>
                      <MenuItem value="Miss">Miss</MenuItem>
                      <MenuItem value="Mx">Mx</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      className={classes.textField}
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      className={classes.textField}
                      fullWidth
                      label="Phone Number"
                      name="phoneNumber"
                      type="text"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      className={classes.textField}
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      className={classes.textField}
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      variant="outlined"
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      variant="outlined"
                      id="outlined-secondary"
                      label="Confirm Password"
                      name="password2"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                          Sign up
                        </Typography>
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
            <RouterLink href="/signin">
              <Typography className={classes.link} style={{ marginTop: 40 }}>
                {'Already have an account? sign in.'}
              </Typography>
            </RouterLink>
          </div>
        </Grid>
        <Grid className={classes.imgContainer} item lg={6}>
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
