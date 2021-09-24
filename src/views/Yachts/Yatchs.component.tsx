import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Destinations } from '@views/Home/components';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
import PreviewDrawer from './components/PreviewDrawer';

import container from './Yatchs.container';

const YatchDetails = (props) => {
  const {
    onFetchRandomDestinationStart,
    destination: { randomDestination }
  } = props;

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };


  useEffect(() => {
    onFetchRandomDestinationStart();
  }, []);

  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery handleDrawerOpen={handleDrawerToggle} />
      <Destinations destinationList={randomDestination} />
      <Experiences />
      <Enquiry />
      {open && (
        <PreviewDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      )}
    </Container>
  );
};

export default container(YatchDetails);
