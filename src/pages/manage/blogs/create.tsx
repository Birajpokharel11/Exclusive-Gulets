import React from 'react';
import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';
import WithAuth from '@components/WithAuth';

import Experience from '@views/Admin/Blogs/components/createBlog';

function CreateBlog() {
  return (
    <>
      <Head>
        <title>Admin | Blog</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Experience} layout={Admin} />
    </>
  );
}

const WrappedPage = WithAuth(CreateBlog, ['ROLE_BROKER']);

export default WrappedPage;
