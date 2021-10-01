import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchYachtsStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YachtPage from '@views/Yachts';

export default function Yatch() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Yachts</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | Yachts"
          key="title"
        />
        <meta
          name="description"
          content="LUXURY GULET & YACHT CHARTER EXPERTS"
        />
        <meta
          property="og:description"
          content="LUXURY GULET & YACHT CHARTER EXPERTS"
          key="description"
        />
      </Head>
      <WithLayout component={YachtPage} layout={Main} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(fetchYachtsStart());
  store.dispatch(fetchRandomDestinationStart());
  store.dispatch(fetchExperiencesStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const yacht = myStore.yacht;

  return {
    props: { yacht },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 minutes
    revalidate: 3600 // In seconds
  };
});
