import Head from 'next/head';

import { END } from 'redux-saga';
import { wrapper } from '@store/index';
import { fetchDestinationStart } from '@store/destination/destination.actions';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationPage from '@views/Destinations/';

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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(fetchDestinationStart());
  store.dispatch(END);

  await store.sagaTask?.toPromise();
  const myStore = store.getState();
  const destination = myStore.destination;

  return {
    props: { destination },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 minutes
    revalidate: 3600 // In seconds
  };
});

export default Destinations;
