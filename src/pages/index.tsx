import React from 'react';
import Head from 'next/head';

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
import { fetchHomeStart } from '@store/home/home.actions';

export default function Home({ isIOS, fullUrl }) {
  console.log({ fullUrl });

  return (
    <>
      <Head>
        <title>Exclusive Gulets</title>
        <meta property="og:title" content="Exclusive Gulets" key="title" />
        <meta
          name="description"
          content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
        />
        <meta
          property="og:description"
          content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
          key="description"
        />
        <meta
          property="og:image"
          content={`${process.env.BASE_URL}/assets/images/heroYatch.png`}
          key="image"
        />
      </Head>
      <WithLayout component={HomePage} layout={Main} isIOS={isIOS} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  store.dispatch(fetchYachtsStart());
  store.dispatch(fetchRandomDestinationStart());
  store.dispatch(fetchExperiencesStart());
  store.dispatch(fetchPostsStart());
  store.dispatch(fetchOfferStart());
  store.dispatch(fetchHomeStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const posts = myStore.posts;
  console.log({ posts });

  return {
    props: { posts },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600 // In seconds
  };
});
