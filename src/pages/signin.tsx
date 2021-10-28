import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';

import Signin from '@views/Signin';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | SignIn</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | SignIn"
          key="title"
        />
      </Head>
      <WithLayout component={Signin} layout={Minimal} />
    </>
  );
}
