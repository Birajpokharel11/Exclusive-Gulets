import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';

import container from './Experiences.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Experiences = (props) => {
  const classes = useStyles();

  const {
    experience: { loading, experiences }
  } = props;

  return (
    <Box>
      <BannerSection
        title="EXCLUSIVE GULETS"
        description="Experience Exceptional Yachting"
        {...props}
      />

      <Box component="section">
        <BackgroundVectors />
        <Container>
          <Box mb={4}>
            {/*<Typography>{featured_destination.content}</Typography>*/}
          </Box>
          <CardList list={experiences} />
        </Container>
      </Box>
      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Experiences);
