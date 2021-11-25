import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import countryList from '@mocks/country_code.json';

import Placeholder from '@modules/components/Placeholder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menuProps } from '@utils/utils';
import Person from '@material-ui/icons/Person';

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
      width: '260px',
      '&:hover': {
        backgroundColor: '#2A398D'
      },
      color: '#FFFFFF',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    },
    textWidth: {
      width: '100%'
    }
  })
);

const validationSchema = Yup.object({
  title: Yup.string().required('This field is required'),
  name: Yup.string().required('This field is required'),
  email: Yup.string().required('This field is required'),
  country: Yup.string().required('This field is required'),
  phonenumber: Yup.string().required('This field is required'),
  comments: Yup.string().required('This field is required')
});
export default function EnquiryForm() {
  const classes = useStyles();

  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      title: '',
      name: '',
      email: '',
      country: '',
      phonenumber: '',
      comments: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
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
            <Typography
              style={{ width: '800px', height: '90px' }}
              align="center"
              color="textPrimary"
              variant="subtitle1"
            >
              We understand that your time is valuable, and it is no easy task
              to choose the right boat out of so many! Our on-line portfolio
              represents a small number of the yachts that eXclusive Gulets has
              available for charter. To discover an even wider selection and
              find out about our best offers, please fill out the form below.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div style={{ paddingTop: '59px' }} />
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item container md={6} sm={12} xs={12} spacing={2}>
              <Grid item xs={4}>
                <FormControl
                  variant="outlined"
                  error={formik.touched.title && Boolean(formik.errors.title)}
                >
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ color: '#091527', margin: '12px 0' }}
                  >
                    Title
                  </InputLabel>
                  <Select
                    id="title"
                    name="title"
                    style={{ marginTop: '10px', width: '190px' }}
                    IconComponent={() => (
                      <ExpandMoreIcon style={{ color: '#2A398D' }} />
                    )}
                    label="Select"
                    fullWidth
                    MenuProps={menuProps}
                    InputLabelProps={{
                      style: { color: '#091527' }
                    }}
                    InputProps={{ notched: false }}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Mr.</MenuItem>
                    <MenuItem value={20}>Ms.</MenuItem>
                    <MenuItem value={30}>Mrs.</MenuItem>
                    <MenuItem value={30}>Miss.</MenuItem>
                    <MenuItem value={30}>Mx.</MenuItem>
                  </Select>
                  {formik.touched.title && formik.errors.title && (
                    <FormHelperText>{formik.errors.title}</FormHelperText>
                  )}
                </FormControl>

                {/* <Field
                  component={Select}
                  name="title"
                  id="title"
                  label="Title"
                  variant="outlined"
                  style={{ marginTop: '10px' }}
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  IconComponent={() => <ExpandMoreIcon />}
                  fullWidth
                >
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                  <MenuItem value="Ms.">Ms.</MenuItem>
                  <MenuItem value="Miss.">Miss.</MenuItem>
                  <MenuItem value="Mx.">Mx.</MenuItem>
                </Field> */}
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="name"
                  name="name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  // InputProps={{ notched: false }}
                  placeholder="Write your name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  // InputProps={{ notched: false }}
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl
                  variant="outlined"
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                >
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ color: '#091527', margin: '12px 0' }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    id="country"
                    name="country"
                    style={{
                      marginTop: '10px',
                      width: '190px'
                    }}
                    IconComponent={() => (
                      <ExpandMoreIcon style={{ color: '#2A398D' }} />
                    )}
                    label="Select"
                    fullWidth
                    MenuProps={menuProps}
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  >
                    {countryList.map((country) => (
                      <MenuItem key={country.label} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.country && formik.errors.country && (
                    <FormHelperText>{formik.errors.country}</FormHelperText>
                  )}
                </FormControl>
                {/* <Field
                  component={Select}
                  id="country"
                  name="country"
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  style={{ marginTop: '10px' }}
                  IconComponent={() => <ExpandMoreIcon />}
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
                </Field> */}
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="phonenumber"
                  name="phonenumber"
                  label="Mobile Phone"
                  variant="outlined"
                  fullWidth
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phonenumber &&
                    Boolean(formik.errors.phonenumber)
                  }
                  helperText={
                    formik.touched.phonenumber && formik.errors.phonenumber
                  }
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  // InputLabelProps={{
                  //   style: { color: '#091527' }
                  // }}
                  // InputProps={{ notched: false }}
                />
              </Grid>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="comments"
                name="comments"
                label="Your Comments"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { color: '#091527' }
                }}
                // InputProps={{ notched: false }}
                // InputLabelProps={{
                //   style: { color: '#091527' }
                // }}
                value={formik.values.comments}
                onChange={formik.handleChange}
                error={
                  formik.touched.comments && Boolean(formik.errors.comments)
                }
                helperText={formik.touched.comments && formik.errors.comments}
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
        </form>
      </Container>
    </Box>
  );
}
