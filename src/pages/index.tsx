import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchYachtsStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';
import { fetchPostsStart } from '@store/posts/posts.actions';
import { fetchOfferStart } from '@store/offer/offer.actions';
import { fetchHomeStart } from '@store/home/home.actions';
import { checkDomainStart } from '@store/siteCoordinator/siteCoordinator.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import Main1 from '@layouts/Main';
import LandingPage from '@views/Landing';
import HomePage from '@views/Home';

import { getTenantDomain } from '@utils/data';

export default function Index({ isIOS, subdomain }) {
  if (subdomain) {
    return (
      <>
        <Head>
          <title>Exclusive Gulets</title>
          <meta property="og:title" content="Exclusive Gulets" key="title" />
          <meta
            name="description"
            content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
          />
          <meta
            property="og:description"
            content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
            key="description"
          />
          <meta
            property="og:image"
            content={`${process.env.BASE_URL}/assets/images/heroYatch.png`}
            key="image"
          />
        </Head>
        <WithLayout component={HomePage} layout={Main} isIOS={isIOS} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>YATCH CLOUD</title>
      </Head>
      <WithLayout component={LandingPage} layout={Main1} />
    </>
  );
}

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
        store.dispatch(fetchYachtsStart());
        store.dispatch(fetchRandomDestinationStart());
        store.dispatch(fetchHomeStart());
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
