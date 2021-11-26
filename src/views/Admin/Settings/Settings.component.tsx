import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

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
import UploadFile from '@components/SingleUpload';
import 'react-quill/dist/quill.snow.css'; // ES6

import { IAuthState } from '@store/interfaces';
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
  auth?: IAuthState;
  loading?: any;
  route?: string;
  next_page?: number;
  onCreatePostStart?: (formData) => any;
  onEditBrokerProfileStart?: (formData) => any;
  onPicAddStart?: (formData) => any;
}
function Blogs({
  auth: { currentUser, loading, isEditing },
  onEditBrokerProfileStart,
  onPicAddStart
}: Props) {
  const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
  });

  const classes = useStyles();
  const [page, setpage] = useState(0);
  const [mainImage, setMainImage] = useState({
    preview: null,
    raw: null
  });
  const [address, setAddress] = useState('');

  useEffect(() => {
    setMainImage({
      preview: currentUser.imageURL ?? null,
      raw: null
    });
    setAddress(currentUser.address ?? '');
  }, [currentUser]);

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

  const handleChangeAddress = (value) => {
    setAddress(value);
  };

  const submitBrokerImage = (e) => {
    e.preventDefault();
    onPicAddStart({
      selectedFile: mainImage.raw,
      domainName: currentUser.domainName,
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      phoneNumber: currentUser.phoneNumber
    });
  };

  return (
    <>
      <Box mb={4} mt={6}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Formik
                enableReinitialize
                initialValues={{
                  firstName: currentUser.firstName ?? '',
                  lastName: currentUser.lastName ?? '',
                  email: currentUser.email ?? '',
                  phoneNumber: currentUser.phoneNumber ?? '',
                  linkedin: currentUser.linkedin ?? '',
                  twitter: currentUser.twitter ?? '',
                  instagram: currentUser.instagram ?? '',
                  facebook: currentUser.facebook ?? '',
                  youtube: currentUser.youtube ?? '',
                  contactEmail: currentUser.contactEmail,
                  contactPhoneNumber: currentUser.contactPhoneNumber,
                  heroHeading: currentUser.heroHeading ?? '',
                  heroSubHeading: currentUser.heroSubHeading ?? ''
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string().required('first name is required'),
                  lastName: Yup.string().required('last name is required'),

                  email: Yup.string()
                    .email('Must be a valid email')
                    .max(255)
                    .required('Email is required'),

                  phoneNumber: Yup.string()
                })}
                onSubmit={(values, { setSubmitting }) => {
                  onEditBrokerProfileStart({
                    ...values,
                    id: currentUser.id,
                    address: address
                  });
                }}
                render={({ values }) => (
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
                            disabled
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

                        <Grid item container sm={12} spacing={2}>
                          <Grid item sm={4}>
                            <Typography variant="h4">Facebook URL</Typography>

                            <Field
                              component={TextField}
                              placeholder="Facebook URL"
                              variant="outlined"
                              fullWidth
                              name="facebook"
                              id="facebook"
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <Typography variant="h4">Instagram URL</Typography>

                            <Field
                              component={TextField}
                              placeholder="Instagram URL"
                              variant="outlined"
                              fullWidth
                              name="instagram"
                              id="instagram"
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <Typography variant="h4">LinkedIn URL</Typography>

                            <Field
                              component={TextField}
                              placeholder="LinkedIn URL"
                              variant="outlined"
                              fullWidth
                              name="linkedin"
                              id="linkedin"
                            />
                          </Grid>
                        </Grid>

                        <Grid item container sm={12} spacing={2}>
                          <Grid item sm={4}>
                            <Typography variant="h4">Twitter URL</Typography>

                            <Field
                              component={TextField}
                              placeholder="Twitter URL"
                              variant="outlined"
                              fullWidth
                              name="twitter"
                              id="twitter"
                            />
                          </Grid>
                          <Grid item sm={4}>
                            <Typography variant="h4">Youtube URL</Typography>

                            <Field
                              component={TextField}
                              placeholder="Youtube URL"
                              variant="outlined"
                              fullWidth
                              name="youtube"
                              id="youtube"
                            />
                          </Grid>
                        </Grid>

                        <Grid item container sm={12} spacing={2}>
                          <Grid item sm={6}>
                            <Typography variant="h4">
                              Hero Section Heading
                            </Typography>

                            <Field
                              component={TextField}
                              placeholder="Hero Section Heading"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              rowsMax={4}
                              name="heroHeading"
                              id="heroHeading"
                            />
                          </Grid>

                          <Grid item sm={6}>
                            <Typography variant="h4">
                              Hero Section Subheading
                            </Typography>

                            <Field
                              component={TextField}
                              placeholder=" Hero Section Subheading"
                              variant="outlined"
                              fullWidth
                              multiline
                              rows={4}
                              rowsMax={4}
                              name="heroSubHeading"
                              id="heroSubHeading"
                            />
                          </Grid>
                        </Grid>

                        <Grid item container sm={12}>
                          <Grid item sm={12}>
                            <Typography variant="h4">Address</Typography>
                          </Grid>

                          <Grid item sm={12}>
                            <ReactQuill
                              value={address}
                              onChange={handleChangeAddress}
                            />
                          </Grid>
                        </Grid>
                        <Grid item sm={12}>
                          <Typography variant="h4">Contact Email</Typography>

                          <Field
                            component={TextField}
                            placeholder="Contact Email"
                            variant="outlined"
                            fullWidth
                            name="contactEmail"
                            id="contactEmail"
                          />
                        </Grid>

                        <Grid item sm={12}>
                          <Typography variant="h4">
                            Contact Phone Number
                          </Typography>

                          <Field
                            component={TextField}
                            placeholder="Contact Phone Number"
                            variant="outlined"
                            fullWidth
                            name="contactPhoneNumber"
                            id="contactPhoneNumber"
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
                    </Grid>
                  </Form>
                )}
              />
            </Grid>
            <Grid item md={4}>
              <UploadFile
                name="Broker Logo"
                code="logo"
                file={mainImage}
                onChange={handleChange}
                onDelete={() => setMainImage({ preview: '', raw: '' })}
                onSubmit={submitBrokerImage}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default container(Blogs);
