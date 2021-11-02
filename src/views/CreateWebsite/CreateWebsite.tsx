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

import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import WebsiteDetails from 'src/views/WebsiteDetails';
import container from './CreateWebsite.container';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CreateYourWebsite = ({ onValidateUserEmailStart, onSignupStart }) => {
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
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            domainName: ''
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
              firstname: Yup.string()
                .required('Please add your firstname')
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(32, 'Should be 32 characters or less'),
              lastname: Yup.string()
                .required('Please add your lastname')
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(32, 'Should be 32 characters or less'),
              domainName: Yup.string().required('Please add your domain name'),
              phoneNumber: Yup.string().required('Please add your phone number')
            })}
          >
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                id="outlined-secondary"
                label="Domain Name"
                name="domainName"
                fullWidth
              />
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
          </FormikStep>
        </FormikStepper>
      </Container>
    </div>
  );
};

export function FormikStep({ children, ...props }) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  onSubmit,
  initialValues,
  onValidateUserEmailStart,
  ...props
}) {
  const childrenArray = React.Children.toArray(children);
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
      await onSubmit(values, helpers);
      setCompleted(true);
      return;
    }
    if (step === 0) {
      const valid = await onValidateUserEmailStart(values.email);
      if (valid) handleNext();
    } else {
      setStep((s) => s + 1);
    }
    helpers.setTouched({});
  };

  return (
    <Formik {...props} initialValues={initialValues} onSubmit={handleSubmit}>
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
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
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
