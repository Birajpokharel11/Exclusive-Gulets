import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import BespokeExperiencesPage from '@views/Experiences';

import { getTenantDomain } from '@utils/data';

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Experiences</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | Experiences"
          key="title"
        />
        <meta
          property="og:image"
          content="/assets/images/yachts/image-38.png"
          key="title"
        />
      </Head>
      <WithLayout component={BespokeExperiencesPage} layout={Main} />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
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

      store.dispatch(fetchExperiencesStart());
      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      const experience = myStore.experience;

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);
