import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';
import WithPublic from '@components/WithPublic';

import Signup from '@views/SignUp';

function SignUp() {
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

export default WithPublic(SignUp);
