import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import AboutYou from '@views/About';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchCharterStart } from '@store/whyCharter/charter.actions';

import { getTenantDomain } from '@utils/data';

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
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const subdomain = getTenantDomain(req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

      store.dispatch(fetchCharterStart());
      store.dispatch(END);

      await store.sagaTask?.toPromise();

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);
