/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import Guest from 'public/assets/images/heroYatch.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root1: {
      marginTop: '6rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    wrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(3, 18vw)',
      gap: 10
    },
    box1: {
      gridColumn: 'span 4',
      gridRow: 1
    },
    box2: {
      gridColumn: 'span 3',
      gridRow: 'span 2'
    },
    box3: {
      gridColumn: 4 / 5,
      gridRow: 2
    },
    box4: {
      gridColumn: 1 / 2,
      gridRow: 3
    },
    box5: {
      gridColumn: 1 / 2,
      gridRow: 1
    },
    box6: {
      gridColumn: 3 / 4,
      gridRow: 2
    },
    box7: {
      gridColumn: 'span 3',
      gridRow: 'span 2'
    },
    box8: {
      gridColumn: 'span 4',
      gridRow: 3
    }
  })
);

export default function DestinationGallery() {
  const classes = useStyles();
  return (
    <Box component="section" maxWidth="false">
      <Grid container style={{ paddingTop: '3rem' }} spacing={2}>
        <Grid item container xs={6}>
          <Grid item>
            <div className={classes.wrapper}>
              <div className={classes.box1}>
                <img
                  src="assets/images/heroYatch.png"
                  alt="Guest"
                  className={classes.image}
                />
              </div>
              <div className={classes.box2}>
                <img
                  src="assets/images/heroYatch.png"
                  alt="Guest"
                  className={classes.image}
                />
              </div>
              <div className={classes.box3}>
                <img
                  src="assets/images/heroYatch.png"
                  alt="Guest"
                  className={classes.image}
                />
              </div>
              <div className={classes.box4}>
                <img
                  src="assets/images/heroYatch.png"
                  alt="Guest"
                  className={classes.image}
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.wrapper}>
            <div className={classes.box5}>
              <img
                src="assets/images/heroYatch.png"
                alt="Guest"
                className={classes.image}
              />
            </div>
            <div className={classes.box6}>
              <img
                src="assets/images/heroYatch.png"
                alt="Guest"
                className={classes.image}
              />
            </div>
            <div className={classes.box7}>
              <img
                src="assets/images/heroYatch.png"
                alt="Guest"
                className={classes.image}
              />
            </div>
            <div className={classes.box8}>
              <img
                src="assets/images/heroYatch.png"
                alt="Guest"
                className={classes.image}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
