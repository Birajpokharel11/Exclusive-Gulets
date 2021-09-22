import React from 'react';

import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';
import BespokeExperiencesPage from '@views/BespokeExperiences';

export default function Experiences() {
  return <WithLayout component={BespokeExperiencesPage} layout={Main} />;
}
