import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import AdvancedFilterSection from './components/AdvancedFilterSection';
import { Destinations } from '@views/Home/components';
import Experiences from './components/Experiences';
import Enquiry from './components/Enquiry';
import PreviewDrawer from './components/PreviewDrawer';

const YatchDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
      <AdvancedFilterSection />
      <Gallery handleDrawerOpen={handleDrawerToggle} />
      <Destinations />
      <Experiences />
      <Enquiry />
      {open && (
        <PreviewDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      )}
    </Container>
  );
};

export default YatchDetails;
