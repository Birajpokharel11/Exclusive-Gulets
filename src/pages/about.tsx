import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import AboutYou from '@views/About';
import { wrapper } from '@store/index';
import { END } from 'redux-saga';
import { fetchCharterStart } from '@store/whyCharter/charter.actions';

export default function About() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | About</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | About"
          key="title"
        />
      </Head>
      <WithLayout component={AboutYou} layout={Main} />
    </>
  );
}
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(fetchCharterStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const about = myStore.about;

  return {
    props: { about },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3600 // In seconds
  };
});
