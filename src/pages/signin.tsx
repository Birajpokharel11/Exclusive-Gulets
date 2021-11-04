import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';

import Signin from '@views/Signin';
import YachtManagerSignIn from '@views/YachtManagerSignIn';
import WithPublic from '@components/WithPublic';
import { getTenantDomain } from '@utils/data';

function SignIn({ subdomain }) {
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

SignIn.getInitialProps = async (ctx) => {
  try {
    if (ctx.req.headers.cookie) {
      const subdomain = await getTenantDomain(ctx.req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      return {
        host: ctx.req.headers.host,
        subdomain
      };
    }
  } catch (e) {
    console.log(e);
  }
  return { subdomain: undefined };
};

export default WithPublic(SignIn);
