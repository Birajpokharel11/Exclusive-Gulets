import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Destinations } from '@views/Home/components';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
import PreviewDrawer from './components/PreviewDrawer';

import container from './Yatchs.container';

const YatchDetails = (props) => {
  const {
    destination: { randomDestination }
  } = props;

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box component="section">
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery handleDrawerOpen={handleDrawerToggle} />
      <Destinations destinationList={randomDestination} />
      <Experiences />
      {open && (
        <PreviewDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      )}
    </Box>
  );
};

export default container(YatchDetails);
