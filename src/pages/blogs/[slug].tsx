import React from 'react';
import axios from 'axios';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchPostsByIdStart } from '@store/posts/posts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import BlogsDetails from '@views/Blogs/Details';

import { getTenantDomain } from '@utils/data';
import { Limits, Sort } from '@utils/enums';

export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} context />;
}

// export async function getStaticPaths() {
//   const { data } = await axios.get(
//     `https://app.exclusivegulets.com/api/v1/posts.json`,
//     {
//       params: {
//         page: 1,
//         amount_per_page: 100,
//         sort_by: Sort.SORT_BY,
//         sort_order: Sort.SORT_ORDER
//       }
//     }
//   );

//   // Get the paths we want to pre-render based on posts
//   const paths = data.posts.map((post) => ({
//     params: { slug: post.slug }
//   }));

//   return {
//     paths,
//     fallback: false // fallback is set to false because we already know the slugs ahead of time
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      const subdomain = await getTenantDomain(req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

      store.dispatch(fetchPostsByIdStart(context.params.slug as string));
      store.dispatch(fetchRandomDestinationStart());

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
        props: { host: req.headers.host, subdomain }
      };
    }
);
