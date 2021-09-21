import React, { useEffect } from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import DestinationPage from '@views/Destinations';

const Destinations = (props) => {
  return <WithLayout component={DestinationPage} layout={Main} />;
};

export default Destinations;
