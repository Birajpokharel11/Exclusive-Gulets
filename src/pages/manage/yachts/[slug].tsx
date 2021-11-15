import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchYachtByIdStart } from '@store/yachts/yachts.actions';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';
import EditYachtDetails from '@views/Admin/Yachts/components/EditYacht';

import { getTenantDomain } from '@utils/data';

export default function YachtDetails() {
  return <WithLayout component={EditYachtDetails} layout={Admin} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      store.dispatch(fetchYachtByIdStart(context.params.slug));

      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      return {
        props: { yacht: myStore.yacht }
      };
    }
);
