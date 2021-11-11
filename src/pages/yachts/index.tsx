import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchYachtsStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import YachtPage from '@views/Yachts';

import { getTenantDomain } from '@utils/data';

export default function Yatch() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Yachts</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | Yachts"
          key="title"
        />
        <meta
          name="description"
          content="LUXURY GULET & YACHT CHARTER EXPERTS"
        />
        <meta
          property="og:description"
          content="LUXURY GULET & YACHT CHARTER EXPERTS"
          key="description"
        />
      </Head>
      <WithLayout component={YachtPage} layout={Main} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const subdomain = await getTenantDomain(req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );
      store.dispatch(fetchYachtsStart());
      store.dispatch(fetchRandomDestinationStart());
      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      const yacht = myStore.yacht;

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);
