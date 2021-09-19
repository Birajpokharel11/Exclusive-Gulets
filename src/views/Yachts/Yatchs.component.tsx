import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Destinations from './components/Destinations';
import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Experience } from '@views/Home/components';

const YatchDetails = () => {
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery />
      <Destinations />
      <Experience />
    </Container>
  );
};

export default YatchDetails;
