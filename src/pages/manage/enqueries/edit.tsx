import React from 'react';
import Head from 'next/head';

import WithLayout from '@components/WithLayout';
import Admin from '@layouts/Admin';

import Offer from '@views/Admin/Offers/components/editOffer';
import withAuth from '@components/WithAuth';

function EditEnquiry() {
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
const WrappedPage = withAuth(EditEnquiry, ['ROLE_BROKER']);

export default WrappedPage;
