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
import container from './editBlog.container';
import BackgroundVectors from '@components/BackgroundVectors';
import router, { useRouter } from 'next/router';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { IPostState } from '@store/interfaces';

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
  posts?: IPostState;
  loading?: any;
  auth?: any;
  route?: string;
  next_page?: number;
  onCreatePostStart?: (formData) => any;
  onFetchPostsStart?: (formData) => any;
  onFetchPostsByIdStart?: (formData) => any;
  onEditPostStart?: (formData) => any;
}
function EditExperiences({
  posts: { postsList, next_page, isCreating, soleBlog },
  onFetchPostsByIdStart,
  onEditPostStart
}: Props) {
  const classes = useStyles();

  useEffect(() => {
    if (router.query) {
      onFetchPostsByIdStart(router.query.id);
    }
  }, [onFetchPostsByIdStart, router]);

  console.log('soleBlog>>>', soleBlog);

  return (
    <>
      <Box mb={4} mt={6}>
        <Container>
          <Formik
            enableReinitialize
            initialValues={{
              title: soleBlog.title,
              metaDescription: soleBlog.metaDescription,
              description: soleBlog.description,
              content: soleBlog.content,
              featured: soleBlog.featured
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
            onSubmit={(values, { setSubmitting }) => {
              onEditPostStart({
                ...values,
                featuredImage: 'featuredImage',
                sideImage: 'sideImage',
                slug: 'slug',
                images: ['image1', 'image2'],
                yachtList: ['1', '2'],
                relatedExperiences: ['1', '2'],
                id: router.query.id
              });
              setSubmitting(false);
            }}
            render={({ values }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item container justify="space-between">
                    <Grid item>
                      <Typography variant="h3">
                        <strong>Edit Blog</strong>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item container justify="space-between" spacing={3}>
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
            )}
          />
        </Container>
      </Box>
    </>
  );
}

export default container(EditExperiences);
