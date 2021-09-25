import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import ExperiencesDetails from '@views/Experiences/Details';

export default function NewsBlogs() {
  return <WithLayout component={ExperiencesDetails} layout={Main} />;
}
