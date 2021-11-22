import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDestinationStart } from '@store/destination/destination.actions';
import { checkDomainStart } from '@store/siteCoordinator/siteCoordinator.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/App';
import DestinationPage from '@views/Destinations';

import { getTenantDomain } from '@utils/data';

const Destinations = () => {
  return (
    <>
      <Head>
        <title>Exclusive Gulets | Destinations</title>
        <meta
          property="og:title"
          content="Exclusive Gulets | Destinations"
          key="title"
        />
        <meta
          property="og:image"
          content="/assets/images/Destination/Hero-bg.jpg"
          key="title"
        />
      </Head>
      <WithLayout component={DestinationPage} layout={Main} />
    </>
  );
};

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
      store.dispatch(checkDomainStart(subdomain));

      store.dispatch(fetchDestinationStart());
      store.dispatch(END);

      await store.sagaTask?.toPromise();
      const myStore = store.getState();
      const destination = myStore.destination;

      return {
        props: { host: req.headers.host, subdomain }
      };
    }
);

export default Destinations;
