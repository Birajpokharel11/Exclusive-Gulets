import React from 'react';
import axios from 'axios';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsByIdStart } from '@store/posts/posts.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BlogsDetails from '@views/Blogs/Details';

import { Limits, Sort } from '@utils/enums';

export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} />;
}


export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://app.exclusivegulets.com/api/v1/posts.json`,
    {
      params: {
        page: 1,
        amount_per_page: 100,
        sort_by: Sort.SORT_BY,
        sort_order: Sort.SORT_ORDER
      }
    }
  );

  // Get the paths we want to pre-render based on posts
  const paths = data.posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false // fallback is set to false because we already know the slugs ahead of time
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchPostsByIdStart(context.params.slug as string));
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const state = store.getState();
    const posts = state.posts;

    if (!posts) {
      return {
        notFound: true
      };
    }

    return {
      props: { posts },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 30 minutes
      revalidate: 3600 // In seconds
    };
  }
);
