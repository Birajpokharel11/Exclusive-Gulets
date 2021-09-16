import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import YatchListPage from '@views/YachtList';

export default function Yatch() {
  return <WithLayout component={YatchListPage} layout={Main} />;
}
