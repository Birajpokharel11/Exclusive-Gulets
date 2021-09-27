/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Grid, Box, Button } from '@material-ui/core';

import Typography from '@modules/components/Typography';
import DestinationGallery from '@views/Home/components/Destinations/DestinationGallery';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '4rem'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    }
  })
);

export default function Destinations(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        <Box textAlign="center">
          <Typography color="textPrimary" align="center" variant="h2" stripped>
            Destinations
          </Typography>

          <Typography
            align="center"
            variant="subtitle1"
            style={{ marginTop: '32px' }}
          >
            Perfect location and the perfect yacht for your ultimate charter
            experience. There is no better way than chartering a luxury gulet or
            yacht to see more of the world. With two third of the Earth covered
            in water, there is always a new exciting destination to explore and
            a different shoreline to discover.​
          </Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: '3rem' }}
        >
          <Button
            fullWidth={matchesSM ? undefined : true}
            variant="contained"
            size="large"
            className={classes.buttonStyle}
          >
            View All Destinations​
          </Button>
        </Grid>
      </Container>

      <DestinationGallery {...props} />
    </>
  );
}
