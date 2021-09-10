import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';

export default function About() {
  return <WithLayout component={() => <h1>About</h1>} layout={Main} />;
}
