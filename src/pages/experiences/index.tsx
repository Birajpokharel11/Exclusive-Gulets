import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BespokeExperiencesPage from '@views/Experiences';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Experiences</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | Experiences"
          key="title"
        />
      </Head>
      <WithLayout component={BespokeExperiencesPage} layout={Main} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(fetchExperiencesStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const experience = myStore.experience;

  return {
    props: { experience },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 minutes
    revalidate: 3600 // In seconds
  };
});
