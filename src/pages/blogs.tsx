import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import Blogs from '@views/Blogs';

export default function NewsBlogs() {
  return <WithLayout component={Blogs} layout={Main} />;
}
