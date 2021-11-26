import React, { useEffect, useState } from 'react';
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
  Button,
  Badge,
  Avatar
} from '@material-ui/core';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { TextField, Select } from 'formik-material-ui';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import * as Yup from 'yup';

import BackgroundVectors from '@components/BackgroundVectors';
import UploadFile from '@components/SingleUpload';

import { openAlert } from '@store/alert/alert.actions';
import { IExperienceState } from '@store/interfaces';

import container from './editExperience.container';

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
    }
  })
);
interface Props {
  experience?: IExperienceState;
  loading?: any;
  auth?: any;
  route?: string;
  next_page?: number;
  onCreateExperienceStart?: (formData) => any;
  onEditExperienceStart?: (formData) => any;
  onFetchExperienceByIdStart?: (formData) => any;
  onPicAddStart?: (formData, imgCode) => any;
}

function EditExperiences({
  experience: { isCreating, experiences, loading, soleExperience, isEditing },
  auth: { currentUser },
  onCreateExperienceStart,
  onFetchExperienceByIdStart,
  onEditExperienceStart,
  onPicAddStart
}: Props) {
  const classes = useStyles();

  useEffect(() => {
    if (router.query) {
      onFetchExperienceByIdStart(router.query.id);
    }
  }, [onFetchExperienceByIdStart, router]);

  const [mainImage, setMainImage] = React.useState({
    preview: soleExperience.featuredImage,
    raw: null
  });
  const [sideImage, setSideImage] = React.useState({
    preview: null,
    raw: null
  });

  useEffect(() => {
    setMainImage({
      preview: soleExperience.featuredImage ?? null,
      raw: null
    });
    setSideImage({
      preview: soleExperience.sideImage ?? null,
      raw: null
    });
  }, [soleExperience]);

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

    alert('submit!!');

    onPicAddStart(
      {
        selectedFile: mainImage.raw,
        domainName: currentUser.domainName
      },
      'main'
    );
  };

  const submitSideImage = (e) => {
    e.preventDefault();
    onPicAddStart({ selectedFile: sideImage.raw }, 'side');
  };

  return (
    <Box pl={4} pr={4} pt={4}>
      <Grid container spacing={3}>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h3">
              <strong>Edit Experiences</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={8}>
          <Formik
            enableReinitialize
            initialValues={{
              title: soleExperience.title,
              metaDescription: soleExperience.metaDescription,
              description: soleExperience.description,
              content: soleExperience.content,
              featured: soleExperience.featured
            }}
            validationSchema={Yup.object({
              title: Yup.string().required('title is required'),
              metaDescription: Yup.string().required(
                'metaDescription is required'
              ),

              content: Yup.string().required('content is required'),

              description: Yup.string().required('description is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              onEditExperienceStart({
                ...values,
                slug: 'slug',
                id: router.query.id
              });
              setSubmitting(false);
            }}
            render={({ values }) => (
              <Form>
                <Grid container justify="space-between" spacing={3}>
                  <Grid item sm={12}>
                    <Typography variant="h4">Title</Typography>

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
                    <Typography variant="h4">Meta Description</Typography>

                    <Field
                      component={TextField}
                      placeholder="Meta Description"
                      variant="outlined"
                      fullWidth
                      name="metaDescription"
                      id="metaDescription"
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Typography variant="h4">Description</Typography>

                    <Field
                      component={TextField}
                      placeholder="Description"
                      variant="outlined"
                      multiline
                      rows={4}
                      rowsMax={4}
                      fullWidth
                      name="description"
                      id="description"
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <Typography variant="h4">Content</Typography>

                    <Field
                      component={TextField}
                      placeholder="Content"
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
                    <Typography variant="h4">Feature Post?</Typography>

                    <Field
                      type="checkbox"
                      name="featured"
                      style={{ margin: '6px 0 0 10px' }}
                    />
                  </Grid>
                  <Grid item container sm={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isEditing}
                    >
                      {isEditing ? (
                        <CircularProgress size="1rem" />
                      ) : (
                        <Typography color="secondary">Save</Typography>
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          />
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
                name="Side Photo"
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

export default container(EditExperiences);
