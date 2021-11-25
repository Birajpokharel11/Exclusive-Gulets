import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Destination from '@views/Admin/Destinations/components/createDestination';

export default function CreateDestination() {
  return (
    <>
      <Head>
        <title>Admin | Destination</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Destination} layout={Admin} />
    </>
  );
}
