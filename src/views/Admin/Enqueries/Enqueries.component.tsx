import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import _ from 'lodash';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
  Button
} from '@material-ui/core';
import BackgroundVectors from '@components/BackgroundVectors';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { OfferTable, CreateOffer } from '../Offers/components';
import { IAuthState } from '@store/interfaces';

import EnqueriesList from './components/EnqueriesList';

import container from './Enqueries.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    }
  })
);
interface Props {
  auth?: IAuthState;
  enquiry?: any;
  onFetchEnqueriesStart?: () => any;
  onfetchEnqueriesByIdStart?: (id) => any;
}

function EnqueriesComponent({
  auth: { currentUser },
  enquiry: { loading, enquiries },
  onFetchEnqueriesStart,
  onfetchEnqueriesByIdStart,
  ...rest
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);

  useEffect(() => {
    onFetchEnqueriesStart();
  }, [onFetchEnqueriesStart]);

  return (
    <>
      <Box mb={4} mt={6}>
        <Container>
          <Grid container justify="space-between" spacing={3}>
            <Grid
              item
              container
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="h2">General Inquiries</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <EnqueriesList
                enquiries={enquiries}
                loading={loading}
                onfetchEnqueriesByIdStart={onfetchEnqueriesByIdStart}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default container(EnqueriesComponent);
