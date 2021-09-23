import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import { Limits, DestinationSort } from '@utils/enums';

// import { DESTINATIONS_SORTING } from '../../../constants/sorting';
// import { DESTINATIONS_LIMIT_PER_PAGE } from '../../../constants/limits';
import container from './NewsAndBlogs.container';

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
    onFetchDestinationStart,
    onFetchPostsStart,
    destination: { loading, destinations },
    posts: { postsList }
  } = props;

  useEffect(() => {
    onFetchDestinationStart({
      ...DestinationSort,
      page: 1,
      amount_per_page: Limits.DESTINATIONS_PER_PAGE
    });
    onFetchPostsStart();
  }, []);

  return (
    <div>
      <BannerSection
        {...props}
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <CardList cardList={postsList} newsBlog="newsBlog" />
      )}
    </div>
  );
};

export default container(Destinations);
