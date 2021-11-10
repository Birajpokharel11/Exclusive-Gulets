import React, { useState } from 'react';
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
import container from './Settings.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { useRouter } from 'next/router';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

import { IPostState } from '@store/interfaces';
import { openAlert } from '@store/alert/alert.actions';

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
  posts?: IPostState;
  loading?: any;
  route?: string;
  next_page?: number;
  onCreatePostStart?: (formData) => any;
}
function Blogs({
  posts: { postsList, next_page, isCreating },
  loading,
  onCreatePostStart
}: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);
  const [selectedFile, setSelectedFile] = useState({ preview: '', raw: '' });

  const fileChangedHandler = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const maxfilesize = 1024 * 1024 * 2; // 2 Mb
    if (file) {
      if (file.size > maxfilesize) {
        openAlert('image size cannot be greater than 2MB', 'error');
      } else {
        reader.onloadend = () => {
          setSelectedFile({
            preview: reader.result as string,
            raw: file
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <>
      <Box mb={4} mt={6}>
        <Container>
          <Formik
            initialValues={{
              title: '',
              metaDescription: '',
              description: '',
              content: '',
              featurePost: true
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(100, 'less than 100')
                .required('title is required'),
              metaDescription: Yup.string()
                .matches(/^[a-zA-Z ]+$/, 'Only letters')
                .max(500, 'less than 500')
                .required('title is required'),
              featurePost: Yup.bool().oneOf([true], 'feature post is required'),

              content: Yup.string()
                .max(1100, 'less than 1100')
                .required('validation.noDescription'),

              description: Yup.string()
                .max(1100, 'less than 1100')
                .required('validation.noDescription')
            })}
            onSubmit={(values, { setSubmitting }) => {
              onCreatePostStart({
                ...values,
                featurePhoto: {
                  bucketName: 'yachtCloud',
                  filePath: 'at\testdrive',
                  fileName: 'featurePhoto',
                  fileType: 'jpg'
                },
                sideImage: {
                  bucketName: 'yachtCloud',
                  filePath: 'atDrive',
                  fileName: 'sideImage',
                  fileType: 'jpeg'
                },
                sliderPhoto: {
                  '0': {
                    bucketName: 'yachtCloud',
                    filePath: 'atdrive',
                    fileName: 'sliderPhoto1',
                    fileType: 'jpeg'
                  },
                  '1': {
                    bucketName: 'yachtCloud',
                    filePath: 'atdrive',
                    fileName: 'sliderPhoto2',
                    fileType: 'png'
                  }
                },
                yachtList: ['1', '2'],
                relatedBlogs: []
              });
              setSubmitting(false);
            }}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item container justify="space-between">
                  <Grid item>
                    <Typography variant="h3">
                      <strong>Settings</strong>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                  <Grid item container alignItems="center" justify="center">
                    <Grid item container justifyContent="center" xs={12}>
                      <input
                        type="file"
                        onChange={fileChangedHandler}
                        accept="image/*"
                        id="outlined-button-file"
                        hidden
                      />

                      <Badge
                        overlap="circle"
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                      >
                        <label htmlFor="outlined-button-file">
                          {selectedFile.preview ? (
                            <Avatar
                              src={selectedFile.preview}
                              alt="course"
                              className={classes.avatar}
                            />
                          ) : (
                            <Avatar
                              src={selectedFile.raw}
                              alt="course"
                              className={classes.avatar}
                            >
                              <InsertPhotoIcon className={classes.avatarIcon} />
                            </Avatar>
                          )}
                        </label>
                      </Badge>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center">
                      <Typography variant="h4">Change Logo</Typography>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2}>
                    <Grid item sm={6} xs={12}>
                      <Typography variant="h4">First Name</Typography>

                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <Typography variant="h4">Last Name</Typography>

                      <Field
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                      />
                    </Grid>
                  </Grid>

                  <Grid item sm={12}>
                    <Typography variant="h4">Email</Typography>

                    <Field
                      component={TextField}
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      id="email"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Typography variant="h4">Phone Number</Typography>

                    <Field
                      component={TextField}
                      placeholder="Phone Number"
                      variant="outlined"
                      fullWidth
                      name="phoneNumber"
                      id="phoneNumber"
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
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Box>
    </>
  );
}

export default container(Blogs);
