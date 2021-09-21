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
    destination: { loading, randomDestination }
  } = props;

  useEffect(() => {
    onFetchOfferStart();
    onFetchRandomDestinationStart();
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
      <Destinations {...props} />
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
};

export default container(Home);
