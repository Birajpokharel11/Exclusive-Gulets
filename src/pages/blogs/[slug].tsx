import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDestinationByIdStart } from '@store/destination/destination.actions';
import BlogsDetails from '@views/Blogs/Details';

export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchDestinationByIdStart(context.query.id));
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const posts = myStore.posts;

    return {
      props: { posts }
    };
  }
);
