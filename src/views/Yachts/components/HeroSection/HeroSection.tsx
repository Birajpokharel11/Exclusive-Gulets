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

import Search from './components/Search';

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
        ' linear-gradient(180deg,rgba(9,21,39,.980392) .01%,rgba(9,21,39,.87) 43.52%,rgba(9,21,39,.24) 93.23%,rgba(9,21,39,0) 99.99%)',

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
          <Box pt={12}></Box>
        </Container>
      </Box>
      <div className={classes.Box2} />
    </Container>
  );
}
