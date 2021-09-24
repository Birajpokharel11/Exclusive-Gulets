import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '../store';
import { fetchPostsStart } from '../store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import NewsAndBlogPage from '@views/NewsAndBlogs';

export default function NewsBlogs() {
  return <WithLayout component={NewsAndBlogPage} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchPostsStart());
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const posts = myStore.posts;

    return {
      props: { posts }
    };
  }
);
