/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import underLine from 'public/assets/images/introductionLine.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#F5F0E4',
      color: '#2A398D'
    }
  })
);

export default function Destinations() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography color="primary" align="center">
            Destinations
          </Typography>
        </Grid>

        <Grid item container justifyContent="center" xs={12}>
          <Image src={underLine} alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" color="primary">
            Perfect location and the perfect yacht for your ultimate charter
            experience. There is no better way than chartering a luxury gulet or
            yacht to see more of the world. With two third of the Earth covered
            in water, there is always a new exciting destination to explore and
            a different shoreline to discover.​
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.buttonStyle}>
            View All Destinations​
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
