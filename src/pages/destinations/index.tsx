import React, { useEffect } from 'react';
import { Limits, DestinationSort } from '@utils/enums';

import { END } from 'redux-saga';
import { wrapper } from '../store';
import { fetchDestinationStart } from '../store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationPage from '@views/Destinations';

const Destinations = () => {
  return <WithLayout component={DestinationPage} layout={Main} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(
      fetchDestinationStart({
        ...DestinationSort,
        page: 1,
        amount_per_page: Limits.DESTINATIONS_PER_PAGE
      })
    );
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const destination = myStore.destination;

    return {
      props: { destination }
    };
  }
);

export default Destinations;
