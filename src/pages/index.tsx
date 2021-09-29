import React from 'react';
import { NextPageContext } from 'next';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import HomePage from '@views/Home';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchYachtsStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';
import { fetchPostsStart } from '@store/posts/posts.actions';
import { fetchOfferStart } from '@store/offer/offer.actions';

export default function Home({ isIOS }) {
  return <WithLayout component={HomePage} layout={Main} isIOS={isIOS} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchYachtsStart());
    store.dispatch(fetchRandomDestinationStart());
    store.dispatch(fetchExperiencesStart());
    store.dispatch(fetchPostsStart());
    store.dispatch(fetchOfferStart());
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const posts = myStore.posts;

    return {
      props: { posts }
    };
  }
);

Home.getInitialProps = ({ req }: NextPageContext) => {
  let isIOS = false;
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
    isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  }
  return {
    isIOS
  };
};
