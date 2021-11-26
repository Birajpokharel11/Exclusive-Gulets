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
import container from './Blogs.container';
import BackgroundVectors from '@components/BackgroundVectors';
import router, { useRouter } from 'next/router';
import { Formik, Field, Form, FormikConfig, FormikValues } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import { IPostState } from '@store/interfaces';
import { BlogTable, CreateBlog } from './components';

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
}
function Blogs({
  posts: { postsList, next_page, isCreating },
  auth: { currentUser },
  loading,
  onCreatePostStart,
  onFetchPostsStart,
  ...rest
}: Props) {
  const classes = useStyles();

  useEffect(() => {
    if (!_.isEmpty(currentUser)) {
      onFetchPostsStart(currentUser.id);
    }
  }, [currentUser, onFetchPostsStart]);

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
                <Typography variant="h5">Blogs</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push('/manage/blogs/create')}
                    >
                      Create Blog
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <BlogTable {...rest} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default container(Blogs);
