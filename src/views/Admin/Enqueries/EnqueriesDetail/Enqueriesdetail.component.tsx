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
import Form from './components/Form';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '2rem 0 3rem'
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
    },
    labelTextColor: {
      color: '#091527',
      margin: '12px 0',
      marginTop: '-0px'
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
  onFetchEnqueriesByIdStart?: (id) => Function;
}

const EnquiryForm = ({ enquiry, onFetchEnqueriesByIdStart }: Props) => {
  const classes = useStyles();
  useEffect(() => {
    if (router.query) {
      onFetchEnqueriesByIdStart(router.query.slug);
    }
  }, [router]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="left">
          Individual Enqueries
        </Typography>
      </Container>{' '}
      <Form enquiry={enquiry} />
    </Box>
  );
};

export default container(EnquiryForm);
