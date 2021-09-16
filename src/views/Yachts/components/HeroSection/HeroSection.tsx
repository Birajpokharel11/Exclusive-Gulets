/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Box
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import { AddBox } from '@material-ui/icons';
import Destination from './components/Destination';
import AdvancedFilterSection from './components/AdvancedFilterSection/AdvancedFilterSection';
import typography from '@theme/typography';
import Gallery from './components/Gallery/Gallery';
const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '0%',
      position: 'relative'
    },
    Yatch: {
      width: '100%',
      height: '546px',
      objectFit: 'cover',
      display: 'block'
    },

    imageTextShadows: {
      position: 'absolute',
      top: '0',
      width: '100%',
      zIndex: 1,

      background:
        ' linear-gradient(177.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0.291523) 88.63%, rgba(9, 21, 39, 0) 94.76%)',
      height: '263px'
    },
    Box2: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      background:
        ' linear-gradient(180deg, #071529 0%, rgba(7, 21, 41, 0.17) 34.38%, rgba(7, 21, 41, 0) 50%, rgba(7, 21, 41, 0.17) 66.67%, #071529 100%)',
      height: '546px',
      opacity: '0.8'
    },
    Heading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#F5F0E4'
    },
    SubHeading: {
      textAlign: 'center',
      color: '#F5F0E4',
      fontWeight: 300
    }
  })
);

export default function HeroSection() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={false} className={classes.Container}>
        <img
          src="/assets/images/Yatchss.png"
          alt="HeroYatch"
          className={classes.Yatch}
        />
        <Box pt={14} className={classes.imageTextShadows}>
          <Container maxWidth="xl">
            <Typography variant="h3" className={classes.Heading}>
              a yacht for every occasıon
            </Typography>
            <Typography variant="h6" className={classes.SubHeading}>
              Filter as your needs and find your dream yacht.
            </Typography>
            <Box pt={12}>
              <Destination />
            </Box>
          </Container>
        </Box>
        <div className={classes.Box2} />
      </Container>
      <Box>
        <AdvancedFilterSection />
        <Gallery />
      </Box>
    </>
  );
}