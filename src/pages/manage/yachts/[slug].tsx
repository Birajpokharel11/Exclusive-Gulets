import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import {
  fetchYachtByIdStart,
  fetchFlagStart,
  fetchCountryStart,
  fetchHomePortStart,
  fetchWaterToysStart,
  fetchInclusiveTermStart,
  fetchExtrasStart,
  fetchYachtFeaturesStart
} from '@store/yachts/yachts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';
import EditYachtDetails from '@views/Admin/Yachts/components/EditYacht';

export default function YachtDetails() {
  return <WithLayout component={EditYachtDetails} layout={Admin} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      store.dispatch(fetchYachtByIdStart(context.params.slug));
      store.dispatch(fetchFlagStart());
      store.dispatch(fetchCountryStart());
      store.dispatch(fetchHomePortStart());
      store.dispatch(fetchWaterToysStart());
      store.dispatch(fetchInclusiveTermStart());
      store.dispatch(fetchExtrasStart());
      store.dispatch(fetchYachtFeaturesStart());

      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      return {
        props: { yacht: myStore.yacht }
      };
    }
);
