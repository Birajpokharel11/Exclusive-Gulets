import React from 'react';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YatchDetailsPage from '@views/YachtDetails';
import { useRouter } from 'next/router';

import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { fetchYachtByIdStart } from '@store/yachts/yachts.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

export default function Slug() {
  return <WithLayout component={YatchDetailsPage} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    let user_id = 0;
    let user_data = null;

    if (typeof window !== 'undefined') {
      user_data = JSON.parse(window.sessionStorage.getItem('user'));
    }

    if (user_data) {
      user_id = user_data.id;
    }
    store.dispatch(fetchYachtByIdStart(context.query.id, user_id));
    store.dispatch(fetchRandomDestinationStart());

    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const posts = myStore.posts;

    return {
      props: { posts }
    };
  }
);
