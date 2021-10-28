import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  MenuItem
} from '@material-ui/core';

import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';

import countryList from '@mocks/country_code.json';

import Placeholder from '@modules/components/Placeholder';

import { menuProps } from '@utils/utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0 3rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      '&:hover': {
        backgroundColor: '#2A398D'
      },
      color: '#FFFFFF'
    },
    textWidth: {
      width: '100%'
    }
  })
);

export default function EnquiryForm() {
  const classes = useStyles();

  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h2" color="textPrimary" align="center">
              We can save you time & money.
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              We understand that your time is valuable, and it is no easy task
              to choose the right boat out of so many! Our on-line portfolio
              represents a small number of the yachts that eXclusive Gulets has
              available for charter. To discover an even wider selection and
              find out about our best offers, please fill out the form below.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Formik
          initialValues={{
            title: '',
            name: '',
            email: '',
            country: '',
            phonenumber: '',
            comments: ''
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('This field is required'),
            name: Yup.string().required('This field is required'),
            email: Yup.string().required('This field is required'),
            country: Yup.string().required('This field is required'),
            phonenumber: Yup.string().required('This field is required'),
            comments: Yup.string().required('This field is required')
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid item container md={6} sm={12} xs={12} spacing={2}>
                <Grid item xs={3}>
                  <Field
                    component={TextField}
                    name="title"
                    id="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    SelectProps={{
                      MenuProps: menuProps
                    }}
                    InputProps={{ notched: false }}
                  >
                    <MenuItem value="Mr.">Mr.</MenuItem>
                    <MenuItem value="Mrs.">Mrs.</MenuItem>
                    <MenuItem value="Ms.">Ms.</MenuItem>
                    <MenuItem value="Miss.">Miss.</MenuItem>
                    <MenuItem value="Mx.">Mx.</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={9}>
                  <Field
                    component={TextField}
                    id="name"
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    InputProps={{ notched: false }}
                    placeholder="Write your name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{ notched: false }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    component={TextField}
                    id="country"
                    name="country"
                    select
                    label="Select"
                    variant="outlined"
                    fullWidth
                    SelectProps={{
                      MenuProps: menuProps
                    }}
                    InputProps={{ notched: false }}
                  >
                    {countryList.map((country) => (
                      <MenuItem key={country.label} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid item xs={9}>
                  <Field
                    component={TextField}
                    id="phonenumber"
                    name="phonenumber"
                    label="Mobile Phone"
                    variant="outlined"
                    fullWidth
                    InputProps={{ notched: false }}
                  />
                </Grid>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Field
                  component={TextField}
                  id="comments"
                  name="comments"
                  label="Your Comments"
                  multiline
                  rows={9}
                  variant="outlined"
                  fullWidth
                  InputProps={{ notched: false }}
                />
              </Grid>
              <Grid item container justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  className={classes.buttonStyle}
                >
                  Enquire
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </Box>
  );
}
