import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection/HeroSection';
import Offers from './components/Offers';
const Blogs = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
     <Offers/>
    </Container>
  );
};

export default Blogs;
