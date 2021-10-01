import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';

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
      <WithLayout component={() => <h1>About</h1>} layout={Main} />
    </>
  );
}
