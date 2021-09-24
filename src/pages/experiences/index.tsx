import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BespokeExperiencesPage from '@views/Experiences';
import { END } from 'redux-saga';
import { wrapper } from '../store';
import { fetchExperiencesStart } from '../store/experiences/experiences.actions';


export default function Experiences() {
  return <WithLayout component={BespokeExperiencesPage} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchExperiencesStart());
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const experience = myStore.experience;

    return {
      props: { experience }
    };
  }
);
