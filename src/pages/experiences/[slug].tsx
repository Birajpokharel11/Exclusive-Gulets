import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchExperienceByIdStart } from '@store/experiences/experiences.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import ExperiencesDetails from '@views/Experiences/Details';

export default function Experiences() {
  return <WithLayout component={ExperiencesDetails} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(fetchExperienceByIdStart(context.params.slug as string));
    store.dispatch(fetchRandomDestinationStart());
    store.dispatch(END);

    await store.sagaTask?.toPromise();
    const myStore = store.getState();
    const experience = myStore.experience;

    if (!experience) {
      return {
        notFound: true
      };
    }

    return {
      props: { experience }
    };
  }
);
