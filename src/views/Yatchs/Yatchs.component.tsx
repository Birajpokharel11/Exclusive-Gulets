import React from 'react';
import Container from '@material-ui/core/Container';

import HeroSection from './components/HeroSection';

const YatchDetails = () => {
  return (
    <Container maxWidth={false} style={{ padding: '0%' }}>
      <HeroSection />
    </Container>
  );
};

export default YatchDetails;
