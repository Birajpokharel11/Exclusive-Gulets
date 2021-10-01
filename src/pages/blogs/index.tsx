import React from 'react';
import Head from 'next/head';
import { Limits, BlogSort } from '@utils/enums';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import Blogs from '@views/Blogs';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsStart } from '@store/posts/posts.actions';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Blogs</title>
        <meta
          name="description"
          content="Keep up to date with our latest yachting news, charter destinations, special offers, gulet rentals and read new updates about current travel situation."
        />
      </Head>

      <WithLayout component={Blogs} layout={Main} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  if (store.getState()) {
    store.dispatch(
      fetchPostsStart({
        ...BlogSort,
        page: 1,
        amount_per_page: Limits.BLOGS_PER_PAGE
      })
    );
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    return {
      props: {},
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 30 minutes
      revalidate: 3600 // In seconds
    };
  }
});
