import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationsDetails from '@views/Destinations/Details';
import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDestinationByIdStart } from '@store/destination/destination.actions';

export default function DestinationDetails() {
  return <WithLayout component={DestinationsDetails} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
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
      props: { destination }
    };
  }
);
