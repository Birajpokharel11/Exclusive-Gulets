import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CircularProgress } from '@material-ui/core';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';

import { Limits, DestinationSort } from '@utils/enums';

// import { DESTINATIONS_SORTING } from '../../../constants/sorting';
// import { DESTINATIONS_LIMIT_PER_PAGE } from '../../../constants/limits';
import container from './Destinations.container';

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

  const {
    destinations: { loading, destinations }
  } = props;

  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
        {...props}
      />

      <Box component="section">
        <BackgroundVectors />
        <Container>
          <Box mb={4}>
            <Typography>{featured_destination.content}</Typography>
          </Box>
          <CardList list={destinations} />
        </Container>
      </Box>
      <FooterSlider />
    </Box>
  );
};

export default container(Destinations);
