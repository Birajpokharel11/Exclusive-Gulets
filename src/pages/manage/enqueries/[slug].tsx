import React from 'react';
import axios from 'axios';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsByIdStart } from '@store/posts/posts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import BlogsDetails from '@views/Blogs/Details';

import { getTenantDomain } from '@utils/data';
import { Limits, Sort } from '@utils/enums';
import { Typography } from '@material-ui/core';
import Admin from '@layouts/Admin';
import { fetchEnqueriesByIdStart } from '@store/home/home.actions';

export default function NewsBlogs() {
  return (
    <WithLayout
      component={() => <Typography>Hell0 Enquery</Typography>}
      layout={Admin}
      context
    />
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      store.dispatch(fetchEnqueriesByIdStart(1));

      store.dispatch(END);

      await store.sagaTask?.toPromise();
      return {
        props: {}
      };
    }
);
