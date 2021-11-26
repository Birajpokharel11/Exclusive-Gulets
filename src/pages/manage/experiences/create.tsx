import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Experience from '@views/Admin/Experiences/components/createExperience';

export default function CreateExperience() {
  return (
    <>
      <Head>
        <title>Admin | Experiences</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Experience} layout={Admin} />
    </>
  );
}
