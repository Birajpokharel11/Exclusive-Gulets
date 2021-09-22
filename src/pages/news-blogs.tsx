import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import NewsAndBlogPage from '@views/NewsAndBlogs';

export default function NewsBlogs() {
  return <WithLayout component={NewsAndBlogPage} layout={Main} />;
}
