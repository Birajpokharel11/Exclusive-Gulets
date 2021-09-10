import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';

export default function Destinations() {
  return <WithLayout component={() => <h1>Destinations</h1>} layout={Main} />;
}
