import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YachtPage from '@views/Yachts';

export default function Yatch() {
  return <WithLayout component={YachtPage} layout={Main} />;
}
