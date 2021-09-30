import React from 'react';
import { useRouter } from 'next/router';

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
import container from './YatchDetails.container';

const YatchDetails = (props) => {
  const {
    siteCoordinator: { yachtStore }
  } = props;
  const { query } = useRouter();

  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <SpecialOffer />
      <HeroSection data={yachtStore} />
      <AboutSection data={yachtStore} />
      <GallerySection />
      <AccomodationSection />
      <GallerySilder data={yachtStore} />
      <OptionalFeatures />
      <DestinationSection />
      <Reviews />
      <Enquiry />
    </Container>
  );
};

export default container(YatchDetails);
