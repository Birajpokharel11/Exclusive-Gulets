import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Offer from '@views/Admin/Offers/components/editOffer';

export default function EditOffer() {
  return (
    <>
      <Head>
        <title>Admin | Offers</title>
        <meta name="og:image" content="/assets/images/Blog/Hero-bg.jpg" />
      </Head>

      <WithLayout component={Offer} layout={Admin} />
    </>
  );
}
