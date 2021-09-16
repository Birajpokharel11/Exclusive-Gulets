import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import underLine from 'public/assets/images/smallBlueUnderline.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem'
    },

    buttonStyle: {
      backgroundColor: '#2A398D',
      minWidth: '260px',
      minHeight: '52px',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    }
  })
);

export default function DestinationPhoto() {
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
          <Typography color="textPrimary" align="center" variant="h2">
            Destinations
          </Typography>
        </Grid>

        <Grid item container justifyContent="center" xs={12}>
          <Image src={underLine} alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" color="textSecondary" variant="subtitle1">
            Perfect location and the perfect yacht for your ultimate charter
            experience. There is no better way than chartering a luxury gulet or
            yacht to see more of the world. With two third of the Earth covered
            in water, there is always a new exciting destination to explore and
            a different shoreline to discover.​
          </Typography>
        </Grid>
        <Grid item justifyContent="center">
          <Button variant="contained" className={classes.buttonStyle}>
            <Typography
              color="secondary"
              style={{ textTransform: 'capitalize' }}
              variant="h5"
            >
              View All Destinations​
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}