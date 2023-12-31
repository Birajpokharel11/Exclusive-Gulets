import React, { useEffect } from 'react';
import Router from 'next/router';
import Image from 'next/image';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';
import { IDestinationState } from '@store/interfaces';

import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';

import container from './Destinations.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    }
  })
);

interface Props {
  destination?: IDestinationState;
  loading?: any;
  route?: string;
  fetchDestinationStart?: (page) => void;
}

const Destinations = ({
  destination: { loading, destinations, next_page },
  fetchDestinationStart
}: Props) => {
  const classes = useStyles();

  const showMore = () => {
    fetchDestinationStart({ page: next_page });
  };

  const redirectDetailsPage = (data) => {
    Router.push({
      pathname: `/destinations/${data.slug}`
    });
  };

  return (
    <Box>
      <BannerSection
        title="Destinations"
        description="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover. "
      />

      <Box component="section" className={classes.sectionGem}>
        <BackgroundVectors />

        <Container>
          <Box mb={4}>
            {/*<Typography>{featured_destination.content}</Typography>*/}
          </Box>
          <CardList
            list={destinations}
            showMore={showMore}
            route="destinations"
            routeRedirect={redirectDetailsPage}
          />
        </Container>
      </Box>
      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Destinations);
