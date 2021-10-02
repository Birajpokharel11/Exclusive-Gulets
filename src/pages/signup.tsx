import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';

import Signup from '@views/SignUp';

export default function NewsBlogs() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | SignUp</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | SignUp"
          key="title"
        />
      </Head>
      <WithLayout component={Signup} layout={Minimal} />
    </>
  );
}
