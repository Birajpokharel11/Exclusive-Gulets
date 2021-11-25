import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
  Button,
  Badge,
  Avatar
} from '@material-ui/core';
import moment from 'moment';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';

import { openAlert } from '@store/alert/alert.actions';
import { IExperienceState } from '@store/interfaces';

import BackgroundVectors from '@components/BackgroundVectors';
import UploadFile from '@components/SingleUpload';

import container from './createOffer.container';

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
    },
    avatar: {
      backgroundColor: '#fff',
      border: '1px dashed #2A398D',
      width: theme.spacing(14),
      height: theme.spacing(14),
      cursor: 'pointer'
    },
    avatarIcon: {
      color: '#2A398D'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
      marginTop: theme.spacing(2)
    }
  })
);
interface Props {
  experience?: IExperienceState;
  loading?: any;
  auth?: any;
  yacht?: any;
  route?: string;
  next_page?: number;
  // onPicAddStart?: (formData, imgCode) => any;
  onCreateGenericOfferStart?: (formData) => any;
  onFetchYachtsStart?: () => any;
}
function CreateExperiences({
  experience: { isCreating, experiences, loading },
  yacht: { adminYachtsList },
  auth: { currentUser },
  onCreateGenericOfferStart,
  onFetchYachtsStart
}: Props) {
  const classes = useStyles();

  useEffect(() => {
    onFetchYachtsStart();
  }, []);

  const [mainImage, setMainImage] = React.useState({
    preview: null,
    raw: null
  });
  const [sideImage, setSideImage] = React.useState({
    preview: null,
    raw: null
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMainImage({
          preview: reader.result,
          raw: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImg2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSideImage({
          preview: reader.result,
          raw: file
        });
      };
      reader.readAsDataURL(file);
    }
  };

  ////////
  const submitMainImage = (e) => {
    e.preventDefault();
    // onPicAddStart(
    //   {
    //     selectedFile: mainImage.raw,
    //     domainName: currentUser.domainName
    //   },
    //   'main'
    // );
  };

  const submitSideImage = (e) => {
    e.preventDefault();
    // onPicAddStart({ selectedFile: sideImage.raw }, 'side');
  };

  return (
    <Box pl={4} pr={4} pt={4}>
      <Grid container spacing={3}>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h3">
              <strong>Create Offer</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Formik
            initialValues={{
              name: '',
              description: '',
              offerStartDate: '',
              offerExpirationDate: '',
              freeCancellation: false,
              simpleItinerary: '',
              airports: '',
              inclusiveTerms: '',
              photo: '',
              yachtId: 1
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('name is required'),
              description: Yup.string().required('description is required'),
              offerStartDate: Yup.string().required(
                'offer start date is required'
              ),
              offerExpirationDate: Yup.string().required(
                'offer expiration date is required'
              ),
              yachtId: Yup.number().required('yacht is required'),

              airports: Yup.string().required('airports is required'),
              inclusiveTerms: Yup.string().required(
                'inclusiveTerms is required'
              )
            })}
            onSubmit={(values, { setSubmitting }) => {
              onCreateGenericOfferStart({
                ...values,
                offerStartDate: moment(values.offerStartDate).format(
                  'YYYY-MM-DD'
                ),
                offerExpirationDate: moment(values.offerExpirationDate).format(
                  'YYYY-MM-DD'
                )
              });
              setSubmitting(false);
            }}
          >
            <Form>
              <Grid container justify="space-between" spacing={3}>
                <Grid item sm={12}>
                  <Typography variant="h4">Offer Name</Typography>

                  <Field
                    component={TextField}
                    fullWidth
                    variant="outlined"
                    placeholder="Offer Name"
                    name="name"
                    id="name"
                  />
                </Grid>

                <Grid item sm={12}>
                  <Typography variant="h4">OFFER DESCRIPTION</Typography>

                  <Field
                    component={TextField}
                    placeholder="OFFER DESCRIPTION"
                    variant="outlined"
                    fullWidth
                    name="description"
                    id="description"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Grid item sm={6}>
                    <Typography variant="h4">OFFER START DATE</Typography>

                    <Field
                      id="date"
                      label="OFFER START DATE"
                      type="date"
                      name="offerStartDate"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />

                    {/* <Field
                      component={TextField}
                      placeholder="OFFER START DATE"
                      variant="outlined"
                      multiline
                      rows={4}
                      rowsMax={4}
                      fullWidth
                      name="offerStartDate"
                      id="offerStartDate"
                    /> */}
                  </Grid>

                  <Grid item sm={6}>
                    <Typography variant="h4">OFFER EXPIRATION DATE</Typography>

                    <Field
                      id="date"
                      label="OFFER EXPIRATION DATE"
                      name="offerExpirationDate"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">
                    Free Cancellation within 24 hours
                  </Typography>

                  <Field
                    type="checkbox"
                    name="freeCancellation"
                    style={{ margin: '6px 0 0 10px' }}
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">Select Yacht *</Typography>

                  <Field
                    component={Select}
                    fullWidth
                    label="Select Yacht"
                    variant="outlined"
                    name="yachtId"
                    id="yachtId"
                  >
                    {adminYachtsList.map((yacht) => (
                      <MenuItem key={yacht.id} value={yacht.id}>
                        {yacht.name}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">NEAREST AIRPORTS</Typography>

                  <Field
                    component={TextField}
                    placeholder="NEAREST AIRPORTS"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="airports"
                    id="airports"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Typography variant="h4">
                    INCLUSIVE TERMS AND ADDITIONAL
                  </Typography>

                  <Field
                    component={TextField}
                    placeholder="INCLUSIVE TERMS AND ADDITIONAL"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="inclusiveTerms"
                    id="inclusiveTerms"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isCreating}
                  >
                    {isCreating ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography color="secondary">Save</Typography>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
        <Grid item md={4}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <UploadFile
                name="Main Photo"
                code="main"
                file={mainImage}
                onChange={handleChange}
                onDelete={() => setMainImage({ preview: '', raw: '' })}
                onSubmit={submitMainImage}
              />
            </Grid>
            <Grid item>
              <UploadFile
                name="Sample Itinerary"
                code="side"
                file={sideImage}
                onChange={handleChangeImg2}
                onDelete={() => setSideImage({ preview: '', raw: '' })}
                onSubmit={submitSideImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default container(CreateExperiences);
