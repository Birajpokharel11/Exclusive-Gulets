import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

import DestinationGallery from './DestinationGallery';

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
    <Box component="section">
      <Container maxWidth="md" className={classes.root}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography color="textPrimary" align="center" variant="h2">
              Destinations
            </Typography>
          </Grid>

          <Grid item container justifyContent="center" xs={12}>
            <img src="/assets/images/smallBlueUnderline.svg" alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              Perfect location and the perfect yacht for your ultimate charter
              experience. There is no better way than chartering a luxury gulet
              or yacht to see more of the world. With two third of the Earth
              covered in water, there is always a new exciting destination to
              explore and a different shoreline to discover.​
            </Typography>
          </Grid>
          <Grid item justifyContent="center">
            <Button variant="contained" className={classes.buttonStyle}>
              View All Destinations​
            </Button>
          </Grid>
        </Grid>
      </Container>

      <DestinationGallery />
    </Box>
  );
}
