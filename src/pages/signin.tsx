import React from 'react';

import WithLayout from '@components/WithLayout';
import Minimal from '@layouts/Minimal';

import Signin from '@views/Signin';

export default function NewsBlogs() {
  return <WithLayout component={Signin} layout={Minimal} />;
}
