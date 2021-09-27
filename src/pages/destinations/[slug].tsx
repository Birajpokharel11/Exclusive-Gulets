import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationsDetails from '@views/Destinations/Details';

export default function NewsBlogs() {
  return <WithLayout component={DestinationsDetails} layout={Main} />;
}
