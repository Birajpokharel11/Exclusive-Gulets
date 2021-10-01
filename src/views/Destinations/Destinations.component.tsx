import React, { useEffect } from 'react';
import Image from 'next/image';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';
import vectorblog1 from '../../assets/images/Blog_single/wheel-vector.svg';

import container from './Destinations.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    Container6: {
      maxWidth: '50%',
      top: 0,
      transform: 'rotate(90deg)',
      position: 'absolute'
    },
    Container7: {
      maxWidth: '50%',
      top: 0,
      right: 0,
      transform: 'rotate(90deg)',
      position: 'absolute'
    }
  })
);

const Destinations = (props) => {
  const classes = useStyles();

  const {
    destination: { loading, destinations }
  } = props;

  return (
    <Box>
      <BannerSection
        title="Destinations"
        description="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover. "
        {...props}
      />

      <Box
        component="section"
        maxWidth="false"
        style={{ position: 'relative' }}
      >
        <Container>
          <CardList list={destinations} route="destinations" />
        </Container>
        <BackgroundVectors />

        {/* <div className={classes.Container6}>
          <Image width={250} src={vectorblog1} alt="vector blog1" />
        </div>
        <div className={classes.Container7}>
          <Image width={250} src={vectorblog1} alt="vector blog1" />
        </div> */}
      </Box>
      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Destinations);
