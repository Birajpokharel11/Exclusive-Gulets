import { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, CircularProgress } from '@material-ui/core';

import { Images } from '@mocks/_destinationMocks';
import { useRouter } from 'next/router';
import YachtSlider from './components/YachtSlider';
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
      height: '100vh',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        height: '60vh'
      }
    }
  })
);

const Home = (props) => {
  const classes = useStyles();

  ///////////////////////////////////////

  const {
    destination: { randomDestination },
    experience: { experiences },
    posts: { postsList },
    offer: { offers },
    siteCoordinator: {
      domain: { data }
    },
    onFetchExperiencesStart,
    onSubmitEnquiryStart,
    fetchPostsStart
    // home: {
    //   home: { yachts }
    // }
  } = props;

  /////////////////////////////////////////

  useEffect(() => {
    if (data) {
      onFetchExperiencesStart(data.id);
      fetchPostsStart(data.id);
    }
  }, [data]);

  const router = useRouter();
  const redirectDetailsPage = (data) => {
    router.push(`/blogs/${data.slug}`, undefined, { shallow: true });
  };

  ///////////////////////////////////////////////

  return (
    <div>
      <Box className={classes.root}>
        <HeroSection {...props} />
      </Box>
      <Introduction />
      <SpecialOffers offers={offers} />
      <CharterYatch />
      {/* <YachtSlider
        title="Loved by our Guests"
        subtitle="Recently Confirmed Charters"
        contentData={yachts}
      /> */}
      <DestinationsGallerySection
        title="Destinations"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={randomDestination}
      />
      <Experience experiences={experiences} />
      <NewsAndBlogs
        redirectDetailsPage={redirectDetailsPage}
        posts={postsList}
      />
      <EnquiryForm submitEnquiryStart={onSubmitEnquiryStart} />
    </div>
  );
};

export default container(Home);
