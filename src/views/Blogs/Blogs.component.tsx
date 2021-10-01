import React from 'react';
import Router from 'next/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import BackgroundVectors from '@components/BackgroundVectors';

import { IPostState } from '@store/interfaces';

import container from './Blogs.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    }
  })
);
interface Props {
  posts?: IPostState;
  loading?: any;
  route?: string;
  fetchPostsStart?: (page) => any;
}

function Destinations({
  posts: { postsList, next_page },
  loading,
  fetchPostsStart
}: Props) {
  const classes = useStyles();

  const showMore = () => {
    fetchPostsStart({ page: next_page });
  };

  const redirectDetailsPage = (data) => {
    Router.push({
      pathname: `/blogs/${data.slug}`
    });
  };

  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
      />
      <BackgroundVectors />
      <Container>
        <Box mb={4} mt={6}>
          <Typography align="center" className={classes.heading}>
            There is more to yachting than just spending a week or so sailing.
            We share our experiences on the best itineraries to suit you,
            organise on board celebrations, exciting excursions, restaurant
            bookings, spa treatments, fitness instruction and more. Read our
            news and blogs below for some insight and get in touch for your own
            tailor-made escape on water.
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <CardList
              list={postsList}
              showMore={showMore}
              routeRedirect={redirectDetailsPage}
              route="blogs"
            />
          )}
        </Box>
      </Container>
      {/* <FooterSlider /> */}
    </Box>
  );
}

export default container(Destinations);
