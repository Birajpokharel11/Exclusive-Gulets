import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationPage from '@views/Destinations';

export default function Destinations() {
  return <WithLayout component={DestinationPage} layout={Main} />;
}
