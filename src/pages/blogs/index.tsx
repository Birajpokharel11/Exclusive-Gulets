import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import Blogs from '@views/Blogs';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

export default function Experiences() {
  return <WithLayout component={Blogs} layout={Main} />;
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
