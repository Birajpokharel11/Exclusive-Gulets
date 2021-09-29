import { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, CircularProgress } from '@material-ui/core';

import { Images } from '@mocks/_destinationMocks';

import YachtSlider from '@components/YachtSlider';
import DestinationsGallerySection from '@components/DestinationsGallerySection';
import {
  Introduction,
  SpecialOffers,
  CharterYatch,
  Experience,
  NewsAndBlogs,
  EnquiryForm
} from './components';
import HeroSection from './components/HeroSection1';

import container from './Home.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Home = (props) => {
  const classes = useStyles();
  const {
    destination: { randomDestination },
    posts: { postsList },
    offer: { offers }
  } = props;

  return (
    <div>
      <Box className={classes.root}>
        <HeroSection {...props} />
      </Box>
      <Introduction />
      <SpecialOffers offers={offers} />
      <CharterYatch />
      <YachtSlider
        title="Loved by our Guests"
        subtitle="Recently Confirmed Charters"
      />
      <DestinationsGallerySection
        title="Destinations"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={Images}
      />
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
};

export default container(Home);
