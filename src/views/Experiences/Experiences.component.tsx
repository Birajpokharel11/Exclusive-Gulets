import React, { useEffect } from 'react';
import Router from 'next/router';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';

import { IExperienceState } from '@store/interfaces';

import container from './Experiences.container';

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
  experience?: IExperienceState;
  loading?: any;
  route?: string;
}

const Experiences = (props: Props) => {
  const classes = useStyles();

  const {
    experience: { loading, experiences }
  } = props;

  const routeRedirect = (data) => {
    Router.push({
      pathname: `/experiences/${data.slug}`,
      query: {
        id: data.id
      }
    });
  };

  return (
    <Box>
      <BannerSection
        title="EXCLUSIVE GULETS"
        description="Experience Exceptional Yachting"
        {...props}
      />

      <Box component="section" className={classes.sectionGem}>
        <BackgroundVectors />

        <Container>
          <CardList
            list={experiences}
            route="experiences"
            routeRedirect={routeRedirect}
          />
        </Container>
      </Box>
      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Experiences);
