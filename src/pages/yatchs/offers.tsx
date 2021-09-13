import React from 'react';
import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import Yatchs from '@views/Yatchs';

export default function Yatch() {
  return <WithLayout component={Yatchs} layout={Main} />;
}
