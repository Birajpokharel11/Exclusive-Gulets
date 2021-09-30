import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Box } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import ContentSection from '@components/ContentSection';
import YahtsSlider from '@components/YachtSlider';
import DestinationsGallerySection from '@components/DestinationsGallerySection';

import { Images } from '@mocks/_destinationMocks';

const ExperiencesDetails = () => {
  return (
    <>
      <BannerSection />
      {/* Second section  */}

      <ContentSection />

      {/* Third Section  */}

      <YahtsSlider
        title="Perfect Yachts for this Experience"
        subtitle="An unforgettable holiday of your life"
      />

      <DestinationsGallerySection
        title="Perfect Location Matches Perfect Experience"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience.
     There is no better way than chartering a luxury gulet or yacht to see more of the world.
      With two third of the Earth covered in water,
     there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={Images}
      />
    </>
  );
};

export default ExperiencesDetails;
