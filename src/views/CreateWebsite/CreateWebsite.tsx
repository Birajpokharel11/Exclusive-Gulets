import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress
} from '@material-ui/core';
import axios from 'axios';

import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import container from './CreateWebsite.container';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  link: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '21px',
    paddingBottom: '1.7rem',
    paddingLeft: '1rem'
  }
}));

const CreateYourWebsite = ({
  onValidateUserEmailStart,
  onSignupStart,
  auth: { loading },
  onOpenAlert
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h2"
          color="textPrimary"
          align="center"
        >
          Create your own website
        </Typography>

        <FormikStepper
          onSubmit={onSignupStart} /// onSubmit Function
          onValidateUserEmailStart={onValidateUserEmailStart}
          onOpenAlert={onOpenAlert}
          loading={loading}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            domainName: '',
            password: '',
            password2: ''
          }}
        >
          {/*  First Step */}
          <FormikStep
            label="Email"
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('invalid email')
                .required('email is required')
                .max(254, 'Really!')
            })}
          >
            <Field
              component={TextField}
              variant="outlined"
              id="outlined-secondary"
              label="Email Address"
              name="email"
              fullWidth
            />
          </FormikStep>
          {/* Second Step */}
          <FormikStep
            label="Form"
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required('Please add your firstname')
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(32, 'Should be 32 characters or less'),
              lastName: Yup.string()
                .required('Please add your lastname')
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(32, 'Should be 32 characters or less'),
              domainName: Yup.string()
                .matches(/^[a-z0-9]+$/, 'Only strings')
                .required('Please add your domain name'),
              phoneNumber: Yup.string().required(
                'Please add your phone number'
              ),
              password: Yup.lazy(() => {
                return Yup.string()
                  .required('Please add your password')
                  .min(6, 'Too short')
                  .max(32, 'Too long');
              }),
              password2: Yup.lazy(() => {
                return Yup.string()
                  .required('Please add your confirm password')
                  .oneOf([Yup.ref('password'), null], 'Passwords must match');
              })
            })}
          >
            <Grid item container alignItems="flex-end">
              <Grid item xs={9}>
                <Field
                  component={TextField}
                  variant="outlined"
                  id="outlined-secondary"
                  label="Domain Name"
                  name="domainName"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <Typography className={classes.link}>
                  .yachtcloud.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="Email"
                name="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="First Name"
                name="firstName"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="Last Name"
                name="lastName"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="Phone Number"
                name="phoneNumber"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="Password"
                type="password"
                name="password"
                fullWidth
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
          </FormikStep>
        </FormikStepper>
      </Container>
    </div>
  );
};
export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children, ...props }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  loading,
  children,
  onSubmit,
  initialValues,
  onValidateUserEmailStart,
  onOpenAlert,
  ...props
}) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const handleNext = (num = 1) => {
    setStep((s) => s + num);
  };

  const handleSubmit = async (values, helpers) => {
    console.log('is  entered');
    if (isLastStep()) {
      console.log('is last step function entered');
      await onSubmit(
        { ...values, email: values.email.trim().toLowerCase() },
        helpers
      );
      setCompleted(true);
      return;
    }
    if (step === 0) {
      // const valid = await onValidateUserEmailStart(
      //   values.email.trim().toLowerCase()
      // );
      const { data } = await axios.post(
        `https://yatchcloud-dev.fghire.com/public/validateUserEmailAndBrokerSite`,
        { email: values.email.trim().toLowerCase() }
      );
      console.log('data received>>>', data);
      if (data.detail.data.isValidEmail) {
        onOpenAlert('This email is valid', 'success');
        handleNext();
      } else {
        onOpenAlert('  User exists with this email address', 'error');
      }
    } else {
      setStep((s) => s + 1);
    }
    helpers.setTouched({});
  };

  return (
    <Formik
      {...props}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={currentChild.props.validationSchema}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {currentChild}

          <div style={{ padding: '1.5rem' }} />
          <Grid container justify="center" spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting || loading ? (
                    <CircularProgress size="1rem" />
                  ) : null
                }
                disabled={isSubmitting || loading}
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default container(CreateYourWebsite);
