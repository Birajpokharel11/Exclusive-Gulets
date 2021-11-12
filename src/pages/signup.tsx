import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';
import Main1 from '@layouts/Main';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { checkDomainStart } from '@store/siteCoordinator/siteCoordinator.actions';

import Signup from '@views/SignUp';
import ManagerSignup from '@views/ManagerSignup';
import WithPublic from '@components/WithPublic';
import { getTenantDomain } from '@utils/data';

function SignUp({ subdomain }) {
  if (subdomain) {
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

  return (
    <>
      <Head>
        <title>YachtCloud | SignIn</title>
        <meta property="og:title" content="YachtCloud | SignIn" key="title" />
      </Head>
      <WithLayout component={ManagerSignup} layout={Main1} />
    </>
  );
}

const WrappedPage = WithPublic(SignUp);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

      const subdomain = await getTenantDomain(req.headers.host);

      if (subdomain) {
        store.dispatch(checkDomainStart(subdomain));
        store.dispatch(END);

        await store.sagaTask?.toPromise();
        const myStore = store.getState();
        const posts = myStore.posts;
        const domain = myStore.siteCoordinator.domain;

        if (!domain.isExists) {
          return {
            notFound: true
          };
        }

        return {
          props: {
            host: req.headers.host,
            subdomain,
            domain: domain.data
          }
        };
      }

      return {
        props: {
          host: req.headers.host,
          subdomain,
          domain: null
        }
      };
    }
);

export default WrappedPage;
