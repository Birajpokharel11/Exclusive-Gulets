import React from 'react';
import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { fetchYachtsStart } from '../../store/yachts/yachts.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YachtPage from '@views/Yachts';

export default function Yatch() {
  return <WithLayout component={YachtPage} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchYachtsStart());
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const yacht = myStore.yacht;

    return {
      props: { yacht }
    };
  }
);
