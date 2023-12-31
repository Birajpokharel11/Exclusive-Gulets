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
  FormHelperText,
  useMediaQuery
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
    },
    SelectTitle: {
      marginTop: '10px',
      width: '180px',
      border: '1px solid rgba(42, 57, 141, 0.5)',
      borderRadius: '4px',
      [theme.breakpoints.down('sm')]: { width: '105px' },
      [theme.breakpoints.down(375)]: { width: '90px' }
    },
    TextFieldName: {
      borderRadius: '4px',
      maxWidth: '400px',

      border: '1px solid rgba(42, 57, 141, 0.5)',
      [theme.breakpoints.down('sm')]: { width: '228px' },
      [theme.breakpoints.down('xs')]: { width: '100%' }
    },
    TextFieldEmail: {
      borderRadius: '4px',
      border: '1px solid rgba(42, 57, 141, 0.5)',
      [theme.breakpoints.down('sm')]: { width: '342px' },
      [theme.breakpoints.down('xs')]: { width: '355px' },
      [theme.breakpoints.down(390)]: { width: '100%' }
    },
    SelectCountry: {
      borderRadius: '4px',
      border: '1px solid rgba(42, 57, 141, 0.5)',
      marginTop: '10px',
      width: '180px',
      [theme.breakpoints.down('sm')]: { width: '166px' },
      [theme.breakpoints.down('sm')]: { width: '161px' },
      [theme.breakpoints.down(375)]: { width: '130px' }
    },
    TextFieldMobile: {
      borderRadius: '4px',
      border: '1px solid rgba(42, 57, 141, 0.5)',
      [theme.breakpoints.down('sm')]: { width: '160px' },
      [theme.breakpoints.down('xs')]: { width: '169px' },
      [theme.breakpoints.down(390)]: { width: '100%' }
    },
    TextFieldComment: {
      borderRadius: '4px',
      border: '1px solid rgba(42, 57, 141, 0.5)',
      [theme.breakpoints.down('sm')]: { width: '352px' },
      [theme.breakpoints.down('xs')]: { width: '355px' },
      [theme.breakpoints.down(390)]: { width: '100%' }
    },
    Container: {
      width: '100vw',
      paddingLeft: '20px',
      [theme.breakpoints.down('xs')]: { padding: '0 30px' },
      [theme.breakpoints.down(390)]: { padding: '0 20px' },
      [theme.breakpoints.down(375)]: { padding: '0 18px' }
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

interface Props {
  submitEnquiryStart?: (formdata) => Function;
  siteCoordinator?: any;
}
export default function EnquiryForm({
  submitEnquiryStart,
  siteCoordinator: {
    domain: { data }
  }
}: Props) {
  const classes = useStyles();

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
      const formdata = {
        brokerId: data.id,
        title: values.title,
        fullName: values.name,
        email: values.email,
        country: values.country,
        comment: values.comments,
        phoneNumber: values.phonenumber
      };

      console.log('hello', JSON.stringify(formdata));
      submitEnquiryStart(formdata);
    }
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
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
              style={{ maxWidth: '800px', height: '90px' }}
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
      {matches && <div style={{ paddingBottom: '91px' }} />}
      <div style={{ paddingTop: '59px' }} />
      <Container className={classes.Container}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={5}>
            <Grid item container md={6} sm={6} xs={12} spacing={2}>
              <Grid item md={5} lg={4} xs={4} sm="auto">
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
                    className={classes.SelectTitle}
                    label="Select"
                    fullWidth
                    MenuProps={menuProps}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Mr">Mr.</MenuItem>
                    <MenuItem value="Ms">Ms.</MenuItem>
                    <MenuItem value="Mrs">Mrs.</MenuItem>
                    <MenuItem value="Miss">Miss.</MenuItem>
                    <MenuItem value="Mx">Mx.</MenuItem>
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
              <Grid item md={7} lg={8} xs={8} sm={6}>
                <TextField
                  id="name"
                  name="name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  className={classes.TextFieldName}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  // InputProps={{ notched: false }}
                />
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText style={{ color: 'red' }}>
                    {formik.errors.name}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className={classes.TextFieldEmail}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                />{' '}
                {formik.touched.email && formik.errors.email && (
                  <FormHelperText style={{ color: 'red' }}>
                    {formik.errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item md={5} lg={4} xs={6} sm="auto">
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
                    className={classes.SelectCountry}
                    label="Select"
                    fullWidth
                    MenuProps={menuProps}
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    {countryList.map((country) => (
                      <MenuItem key={country.label} value={country.label}>
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
              <Grid item md={7} lg={8} xs={6} sm={5}>
                <TextField
                  id="phonenumber"
                  name="phonenumber"
                  label="Mobile Phone"
                  variant="outlined"
                  fullWidth
                  className={classes.TextFieldMobile}
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phonenumber &&
                    Boolean(formik.errors.phonenumber)
                  }
                  InputLabelProps={{
                    style: { color: '#091527' }
                  }}
                  // InputLabelProps={{
                  //   style: { color: '#091527' }
                  // }}
                  // InputProps={{ notched: false }}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber && (
                  <FormHelperText style={{ color: 'red' }}>
                    {formik.errors.phonenumber}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <Grid item md={6} sm={3} xs={12}>
              <TextField
                id="comments"
                name="comments"
                label="Your Comments"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                className={classes.TextFieldComment}
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
              />{' '}
              {formik.touched.comments && formik.errors.comments && (
                <FormHelperText style={{ color: 'red' }}>
                  {formik.errors.comments}
                </FormHelperText>
              )}
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
