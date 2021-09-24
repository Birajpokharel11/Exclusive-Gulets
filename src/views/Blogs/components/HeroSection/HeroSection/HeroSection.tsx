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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '0%',
      position: 'relative'
    },
    Yatch: {
      width: '100%',
      height: '640px',
      objectFit: 'cover',
      display: 'block'
    },

    imageTextShadows: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      zIndex: 1,

      background:
        ' linear-gradient(354.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0.291523) 88.63%, rgba(9, 21, 39, 0) 94.76%)',

      height: '220px'
    },
    Heading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 400
    },
    SubHeading: {
      textAlign: 'center',
      color: '#F5F0E4',
      fontWeight: 300
    }
  })
);

export default function HeroSection() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={false} className={classes.Container}>
        <img
          src="/assets/images/blogs/blogs.png"
          alt="HeroYatch"
          className={classes.Yatch}
        />
        <Box pt={14} className={classes.imageTextShadows}>
          <Container maxWidth="md">
            <Typography variant="h1" align="center" className={classes.Heading}>
              The ideal summer vacation getaway is available NOW!
            </Typography>
            <Typography variant="subtitle1" className={classes.SubHeading}>
              The Caribbean is calling and there is a luxury charter yacht with
              your name on it.
              <br />
            </Typography>
          </Container>
        </Box>
      </Container>
    </>
  );
}
