import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import AdvancedFilterSection from './components/AdvancedFilterSection';
import Destinations from '@components/DestinationsGallerySection';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
import PreviewDrawer from './components/PreviewDrawer';

import container from './Yatchs.container';

const YatchDetails = (props) => {
  const {
    destination: { randomDestination },
    yacht: { yachtsList },
    experience: { experiences }
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedYacht, setSelectedYacht] = useState({});

  const handleDrawerToggle = (id) => {
    const filteredYatch = yachtsList.find((x) => x.id === id);
    setSelectedYacht(filteredYatch);
    setOpen(!open);
  };

  return (
    <Box component="section">
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery handleDrawerOpen={handleDrawerToggle} yachtsList={yachtsList} />
      <Destinations
        title="Destinations"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={randomDestination}
      />
      <Experiences experiences={experiences} />
      {open && (
        <PreviewDrawer
          open={open}
          handleDrawerToggle={handleDrawerToggle}
          selectedYacht={selectedYacht}
        />
      )}
    </Box>
  );
};

export default container(YatchDetails);
