import React from 'react';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YatchDetailsPage from '@views/YachtDetails';

export default function Slug() {
  return <WithLayout component={YatchDetailsPage} layout={Main} />;
}
