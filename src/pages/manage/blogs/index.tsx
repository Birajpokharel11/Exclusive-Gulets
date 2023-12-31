import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';
import WithAuth from '@components/WithAuth';

import Blogs from '@views/Admin/Blogs';

function BlogsPage() {
  return (
    <>
      <Head>
        <title>Admin | Blogs</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Blogs} layout={Admin} />
    </>
  );
}

const WrappedPage = WithAuth(BlogsPage, ['ROLE_BROKER']);

export default WrappedPage;
