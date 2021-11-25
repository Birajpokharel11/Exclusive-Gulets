import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Offer from '@views/Admin/Offers/components/createOffer';

export default function CreateOffer() {
  return (
    <>
      <Head>
        <title>Admin | Offers</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Offer} layout={Admin} />
    </>
  );
}
