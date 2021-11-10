import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';
import { checkDomainStart } from '@store/siteCoordinator/siteCoordinator.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import Blogs from '@views/Blogs';

import { getTenantDomain } from '@utils/data';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Blogs</title>
        <meta
          name="description"
          content="Keep up to date with our latest yachting news, charter destinations, special offers, gulet rentals and read new updates about current travel situation."
        />
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Blogs} layout={Main} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const subdomain = await getTenantDomain(req.headers.host);

      if (subdomain) {
        store.dispatch(checkDomainStart(subdomain));

        store.dispatch(END);

        await store.sagaTask?.toPromise();
        const myStore = store.getState();
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
      } else {
        return {
          notFound: true
        };
      }

      // res.setHeader(
      //   'Cache-Control',
      //   'public, s-maxage=1, stale-while-revalidate=59'
      // );

      // if (store.getState()) {
      //   store.dispatch(fetchPostsStart());
      //   store.dispatch(END);

      //   await store.sagaTask?.toPromise();
      //   return {
      //     props: { host: req.headers.host, subdomain }
      //   };
      // }
    }
);
