import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';

import Signin from '@views/Signin';
import YachtManagerSignIn from '@views/YachtManagerSignIn';
import { getTenantDomain } from '@utils/data';

export default function SignIn({ subdomain }) {
  if (subdomain) {
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

  return (
    <>
      <Head>
        <title>YachtCloud | SignIn</title>
        <meta property="og:title" content="YachtCloud | SignIn" key="title" />
      </Head>
      <WithLayout component={YachtManagerSignIn} layout={Minimal} />
    </>
  );
}

SignIn.getInitialProps = async ({ req }) => {
  const subdomain = await getTenantDomain(req.headers.host);

  if (!subdomain) {
    return {
      notFound: true
    };
  }

  return {
    props: { host: req.headers.host, subdomain }
  };
};
