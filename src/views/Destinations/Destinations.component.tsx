import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { fetchDestinationStart } from '../../store/destination/destination.actions';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
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
    destination: { loading, destinations }
  } = props;

  return (
    <div>
      <BannerSection
        {...props}
        title="DESTINATIONS"
        description="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover."
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <CardList cardList={destinations} route="destinations" />
      )}
    </div>
  );
};

export default container(Destinations);
