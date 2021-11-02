import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDestinationByIdStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import DestinationsDetails from '@views/Destinations/Details';

import { getTenantDomain } from '@utils/data';

export default function DestinationDetails() {
  return <WithLayout component={DestinationsDetails} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      const subdomain = getTenantDomain(req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

      store.dispatch(fetchDestinationByIdStart(context.params.slug as string));
      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      const { destination } = myStore.destination;

      if (!destination) {
        return {
          notFound: true
        };
      }

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);
