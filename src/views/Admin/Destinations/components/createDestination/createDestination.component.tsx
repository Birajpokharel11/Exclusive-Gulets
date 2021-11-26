import React, { useEffect, useState } from 'react';

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

import container from './createDestination.container';

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
  destination?: any;
  yacht?: any;
  route?: string;
  next_page?: number;
  onSubmitDestinationStart?: (formData) => any;
}

function CreateExperiences({
  destination: { isSubmitting },
  onSubmitDestinationStart
}: Props) {
  const classes = useStyles();

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
              <strong>Create Destination</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Formik
            initialValues={{
              title: '',
              metaDescription: '',
              description: '',
              heading: '',
              introContent: '',
              introContent2: '',
              testimonial: '',
              content: ''
            }}
            validationSchema={Yup.object({
              title: Yup.string().required('title is required'),
              description: Yup.string().required('description is required'),
              metaDescription: Yup.string().required(
                'metaDescription is required'
              )
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log('formik submit', values);
              onSubmitDestinationStart(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <Grid container justify="space-between" spacing={3}>
                <Grid item sm={12}>
                  <Typography variant="h4">TITLE</Typography>

                  <Field
                    component={TextField}
                    fullWidth
                    variant="outlined"
                    placeholder="Title"
                    name="title"
                    id="title"
                  />
                </Grid>

                <Grid item sm={12}>
                  <Typography variant="h4">META DESCRIPTION</Typography>

                  <Field
                    component={TextField}
                    placeholder="META DESCRIPTION"
                    variant="outlined"
                    fullWidth
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Typography variant="h4">DESCRIPTION</Typography>

                  <Field
                    component={TextField}
                    placeholder="DESCRIPTION"
                    variant="outlined"
                    fullWidth
                    name="description"
                    id="description"
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">HEADING</Typography>

                  <Field
                    component={TextField}
                    placeholder="HEADING"
                    variant="outlined"
                    fullWidth
                    name="heading"
                    id="heading"
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">INTRO CONTENT (BOLD)</Typography>

                  <Field
                    component={TextField}
                    placeholder="INTRO CONTENT (BOLD)"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="introContent"
                    id="introContent"
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">INTRO CONTENT (SIMPLE)</Typography>

                  <Field
                    component={TextField}
                    placeholder="INTRO CONTENT (SIMPLE)"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="introContent2"
                    id="introContent2"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Typography variant="h4">TESTIMONIAL</Typography>

                  <Field
                    component={TextField}
                    placeholder="TESTIMONIAL"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="testimonial"
                    id="testimonial"
                  />
                </Grid>

                <Grid item container sm={12}>
                  <Typography variant="h4">MAIN CONTENT</Typography>

                  <Field
                    component={TextField}
                    placeholder="MAIN CONTENT"
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    fullWidth
                    name="content"
                    id="content"
                  />
                </Grid>
                <Grid item container sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
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
