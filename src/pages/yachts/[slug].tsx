import React from 'react';
import { useRouter } from 'next/router';

import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { fetchYachtByIdStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import YatchDetailsPage from '@views/YachtDetails';

import { getTenantDomain } from '@utils/data';

export default function Slug() {
  return <WithLayout component={YatchDetailsPage} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      const subdomain = await getTenantDomain(req.headers.host);
      console.log('subDomain', subdomain);
      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

      let user_id = 0;
      let user_data = null;

      if (typeof window !== 'undefined') {
        user_data = JSON.parse(window.sessionStorage.getItem('user'));
      }

      if (user_data) {
        user_id = user_data.id;
      }
      console.log('context', context);
      store.dispatch(fetchYachtByIdStart(context.query.slug));
      store.dispatch(fetchRandomDestinationStart());

      store.dispatch(END);

      await store.sagaTask?.toPromise();

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);
