import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Box } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import ContentSection from './components/ContentSection';
import YahtsSlider from '@components/YachtSlider';
import DestinationsGallerySection from '@components/DestinationsGallerySection';

import { Images } from '@mocks/_destinationMocks';
import container from './ExperiencesDetails.container';

const ExperiencesDetails = (props) => {
  const {
    experience: {
      loading,
      soleExperience: { experience, yachts }
    },
    destination: { randomDestination }
  } = props;

  return (
    <>
      <BannerSection
        {...props}
        title={experience?.title}
        description={experience?.description}
        backgroundImage={experience.featured_image?.url}
        route="soleExperience"
      />
      {/* Second section  */}

      {loading ? (
        <CircularProgress />
      ) : (
        <ContentSection contentData={experience} route="experienceDetails" />
      )}

      {/* Third Section  */}

      <YahtsSlider
        title="Perfect Yachts for this Experience"
        subtitle="An unforgettable holiday of your life"
        contentData={yachts}
      />

      <DestinationsGallerySection
        title="Perfect Location Matches Perfect Experience"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience.
     There is no better way than chartering a luxury gulet or yacht to see more of the world.
      With two third of the Earth covered in water,
     there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={randomDestination}
      />
    </>
  );
};

export default container(ExperiencesDetails);
