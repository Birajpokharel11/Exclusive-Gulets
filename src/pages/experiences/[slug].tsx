import React from 'react';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchExperienceByIdStart } from '@store/experiences/experiences.actions';
import { fetchRandomDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import ExperiencesDetails from '@views/Experiences/Details';

import { getTenantDomain } from '@utils/data';

export default function Experiences() {
  return <WithLayout component={ExperiencesDetails} layout={Main} />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...context }) => {
      console.log('get serverside props>>>', context);
      const subdomain = await getTenantDomain(req.headers.host);

      if (!subdomain) {
        return {
          notFound: true
        };
      }

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1, stale-while-revalidate=59'
      );

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
        props: { host: req.headers.host, subdomain }
      };
    }
);
