import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CircularProgress,
  Container,
  Typography
} from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';

import container from './Blogs.container';
import BackgroundVectors from '@components/BackgroundVectors';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Destinations = (props) => {
  const classes = useStyles();

  const { blogs, loading } = props;
  console.log('Blogs', blogs);
  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
        {...props}
      />
      {loading && <CircularProgress />}
      <Box component="section" style={{ zIndex: 2 }}>
        <Container>
          <Box mb={4} mt={6}>
            <Typography
              align="center"
              style={{
                color: '#00204e',
                fontSize: '20px',
                fontWeight: 300,
                lineHeight: '28px'
              }}
            >
              There is more to yachting than just spending a week or so sailing.
              We share our experiences on the best itineraries to suit you,
              organise on board celebrations, exciting excursions, restaurant
              bookings, spa treatments, fitness instruction and more. Read our
              news and blogs below for some insight and get in touch for your
              own tailor-made escape on water.
            </Typography>
          </Box>
          <CardList list={blogs} />
        </Container>
      </Box>

      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Destinations);
