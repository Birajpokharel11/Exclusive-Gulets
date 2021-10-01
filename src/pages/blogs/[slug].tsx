import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BlogsDetails from '@views/Blogs/Details';
import { wrapper } from '@store/index';
import { END } from 'redux-saga';
import { fetchPostsByIdStart } from '@store/posts/posts.actions';
export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} />;
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchPostsByIdStart(context.query.id));
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const posts = myStore.posts;

    return {
      props: { posts }
    };
  }
);
