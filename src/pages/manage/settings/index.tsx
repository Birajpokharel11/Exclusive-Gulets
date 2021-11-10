import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import SettingsView from '@views/Admin/Settings';

export default function Settings() {
  return (
    <>
      <Head>
        <title>Admin | Settings</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={SettingsView} layout={Admin} />
    </>
  );
}
