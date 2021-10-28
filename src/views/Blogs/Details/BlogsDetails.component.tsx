import React from 'react';
import Box from '@material-ui/core/Box';

import { Images } from '@mocks/_destinationMocks';

import Banner from '@components/BannerSection';
import ContentSection from '@components/ContentSection';
import DestinationsGallerySection from '@components/DestinationsGallerySection';
import YahtsSlider from '@components/YachtSlider';
import BlogContnetSection from '@components/BlogContnetSection';

import Container from './BlogsDetails.container';

const Blogs = (props) => {
  const {
    individual,
    destination: { randomDestination }
  } = props;
  console.log('individual', individual);
  return (
    <Box>
      <Banner
        title={individual?.title}
        description={individual?.description}
        backgroundImage={individual?.featured_image?.url}
      />

      {/* Second section  */}
      <BlogContnetSection individual={individual} />

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
        destinations={randomDestination}
      />
    </Box>
  );
};

export default Container(Blogs);
