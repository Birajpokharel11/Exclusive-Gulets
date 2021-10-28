import React from 'react';
import Head from 'next/head';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DiningView from '@views/Dining';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDiningStart } from '@store/dining/dinning.actions';

export default function Dinning() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Dining</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | About"
          key="title"
        />
      </Head>
      <WithLayout component={DiningView} layout={Main} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(fetchDiningStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const dining = myStore.dining;

  return {
    props: { dining },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600 // In seconds
  };
});
