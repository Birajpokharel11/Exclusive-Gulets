import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Destination from '@views/Admin/Destinations/components/editDestination';

export default function EditDestination() {
  return (
    <>
      <Head>
        <title>Admin | Destination</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Destination} layout={Admin} />
    </>
  );
}
