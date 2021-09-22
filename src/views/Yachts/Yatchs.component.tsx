import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Destinations } from '@views/Home/components';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
import container from './Yatchs.container';

const YatchDetails = (props) => {
  const {
    onFetchRandomDestinationStart,
    destination: { randomDestination }
  } = props;

  useEffect(() => {
    onFetchRandomDestinationStart();
  }, []);

  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery />
      <Destinations destinationList={randomDestination} />
      <Experiences />
      <Enquiry />
    </Container>
  );
};

export default container(YatchDetails);
