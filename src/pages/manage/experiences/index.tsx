import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Experiences from '@views/Admin/Experiences';

export default function ExperiencesPage() {
  return (
    <>
      <Head>
        <title>Admin | Experiences</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Experiences} layout={Admin} />
    </>
  );
}
