import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import HomePage from '@views/Home';

export default function Home() {
  return <WithLayout component={HomePage} layout={Main} />;
}
