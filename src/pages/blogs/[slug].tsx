import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BlogsDetails from '@views/Blogs/Details';

export default function NewsBlogs() {
  return <WithLayout component={BlogsDetails} layout={Main} />;
}
