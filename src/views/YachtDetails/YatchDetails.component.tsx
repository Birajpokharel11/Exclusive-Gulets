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
    yatch: { soleYacht },
    destination: { randomDestination }
  } = props;
  const { query } = useRouter();
  console.log('yachtsdetails', soleYacht);
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      {/* <SpecialOffer /> */}
      <HeroSection data={soleYacht} />
      <AboutSection data={soleYacht} />
      {/* <GallerySection /> */}
      <AccomodationSection data={soleYacht} />
      <GallerySilder />
      <OptionalFeatures />
      <DestinationSection data={randomDestination} />
      {/* <Reviews /> */}
      <Enquiry />
    </Container>
  );
};

export default container(YatchDetails);
