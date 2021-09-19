import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Destinations } from '@views/Home/components';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
const YatchDetails = () => {
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery />
      <Destinations />
      <Experiences />
      <Enquiry />
    </Container>
  );
};

export default YatchDetails;
