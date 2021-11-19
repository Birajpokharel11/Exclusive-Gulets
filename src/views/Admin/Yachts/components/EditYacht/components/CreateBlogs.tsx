import React, { useEffect } from 'react';
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
import { useRouter } from 'next/router';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { IExperienceState, IYachtState } from '@store/interfaces';

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
  soleYacht?: object | any;
  onEditYachtStart?: (formData) => any;
}
function CreateBlogs({ soleYacht, onEditYachtStart }: Props) {
  const classes = useStyles();
  const [page, setpage] = React.useState(0);

  return (
    <>
      <Box mb={4} mt={6}>
        <Formik
          initialValues={{
            title: '',
            metaDescription: '',
            description: '',
            content: '',
            featured: true
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('title is required'),
            metaDescription: Yup.string().required(
              'metaDescription is required'
            ),
            featured: Yup.bool().oneOf([true], 'feature post is required'),

            content: Yup.string().required('content is required'),

            description: Yup.string().required('description is required')
          })}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid item container justify="space-between">
                <Grid item></Grid>
              </Grid>

              <Grid item container justify="space-between" spacing={3}>
                <Grid item sm={12}>
                  <Typography variant="h4">About Yacht</Typography>

                  <Field
                    component={TextField}
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                    rowsMax={4}
                    placeholder="Title"
                    name="title"
                    id="title"
                  />
                </Grid>

                <Grid item sm={12}>
                  <Typography variant="h4">ACCOMMODATION:</Typography>

                  <Field
                    component={TextField}
                    placeholder="Meta Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    rowsMax={4}
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="h4">
                    AMENITIES & ENTERTAINMENT:
                  </Typography>

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

                <Grid item container sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  ></Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </>
  );
}

export default CreateBlogs;
