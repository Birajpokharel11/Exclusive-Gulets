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
  Enquiry,
  SpecialOffer
} from './components';

const YatchDetails = () => {
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <SpecialOffer />
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
