import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import Yachts from '@views/Admin/Yachts';
import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';
import WithAuth from '@components/WithAuth';

function AdminYachts() {
  return (
    <>
      <Head>
        <title>Admin | Yachts</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Yachts} layout={Admin} />
    </>
  );
}

// const WrappedPage = WithAuth(AdminYachts, ['ROLE_MANAGER']);

export default AdminYachts;
