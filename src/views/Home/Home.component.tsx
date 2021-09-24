import { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Box, CircularProgress } from '@material-ui/core';
import {
  Introduction,
  SpecialOffers,
  CharterYatch,
  Destinations,
  YatchSlider,
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
    onFetchOfferStart,
    onFetchRandomDestinationStart,
    onFetchPostsStart,
    destination: { randomDestination },
    posts: { postsList }
  } = props;

  useEffect(() => {
    onFetchOfferStart();
    onFetchRandomDestinationStart();
    onFetchPostsStart();
  }, []);

  return (
    <div>
      <Box className={classes.root}>
        <HeroSection {...props} />
      </Box>
      <Introduction />
      <SpecialOffers />
      <CharterYatch />
      <YatchSlider />
      <Destinations destinationList={randomDestination} />
      <Experience />
      <NewsAndBlogs postsList={postsList} />
      <EnquiryForm />
    </div>
  );
};

export default container(Home);
