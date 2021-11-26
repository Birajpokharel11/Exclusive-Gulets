import React, { useEffect } from 'react';
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
import router, { useRouter } from 'next/router';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import countryList from '@mocks/country_code.json';

import Placeholder from '@modules/components/Placeholder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { menuProps } from '@utils/utils';
import Person from '@material-ui/icons/Person';
import container from './Enqueriesdetail.container';

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
  enquiry?: any;
  onFetchEnqueriesByIdStart?: (id) => any;
}

const EnquiryForm = ({ onFetchEnqueriesByIdStart, enquiry }: Props) => {
  const classes = useStyles();
  console.log('asdasdasdasdasd', router.query.slug);
  useEffect(() => {
    if (router.query) {
      onFetchEnqueriesByIdStart(router.query.slug);
    }
  }, [router]);
  console.log('fullname', enquiry.fullName);
  const formik = useFormik({
    initialValues: {
      title: '',
      name: enquiry?.fullName,
      email: '',
      country: '',
      phonenumber: '',
      comments: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const formdata = {
        title: values.title,
        fullName: values.name,
        email: values.email,
        comment: values.comments,
        phoneNumber: values.phonenumber,
        preferredDestination: values.country
      };

      console.log('hello', JSON.stringify(formdata));
    }
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textPrimary" align="left">
          Individual Enqueries
        </Typography>
      </Container>

      <Container className={classes.Container}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-read-only-input"
            label="Full Name"
            value={enquiry?.fullName}
            fullWidth
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Email"
            value={enquiry?.email}
            fullWidth
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="phoneNumber"
            fullWidth
            value={enquiry?.phoneNumber}
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Desination"
            fullWidth
            value={enquiry?.preferredDestination}
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Comments"
            value={enquiry?.comment}
            fullWidth
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Title"
            fullWidth
            value={enquiry?.title}
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-read-only-input"
            label="Comments"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            className={classes.TextFieldComment}
            InputLabelProps={{
              style: { color: '#091527' }
            }}
            // InputProps={{ notched: false }}
            // InputLabelProps={{
            //   style: { color: '#091527' }
            // }}
            value={enquiry?.comment}
          />{' '}
        </form>
      </Container>
    </Box>
  );
};

export default container(EnquiryForm);
