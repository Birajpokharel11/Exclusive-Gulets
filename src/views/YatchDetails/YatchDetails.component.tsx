import React from 'react';
import Container from '@material-ui/core/Container';

import {
  HeroSection,
  AboutSection,
  GallerySection,
  AccomodationSection,
  GallerySilder,
  OptionalFeatures,
  DestinationSection,
  Reviews,
  Enquiry
} from './components';

const YatchDetails = () => {
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AccomodationSection />
      <GallerySilder />
      <OptionalFeatures />
      <DestinationSection />
      <Reviews />
      <Enquiry />
    </Container>
  );
};

export default YatchDetails;
