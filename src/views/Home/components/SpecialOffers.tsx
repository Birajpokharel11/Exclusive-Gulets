import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import Guest from 'public/assets/images/heroYatch.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem',
      backgroundColor: '#F5F0E4'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    }
  })
);

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: '3rem' }}
      >
        <Grid item xs={12}>
          <Typography color="textPrimary" align="center" variant="h2">
            Special Offers
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" xs={12}>
          <img src="/assets/images/smallBlueUnderline.svg" alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" variant="subtitle1" color="textPrimary">
            Yachting does not need to break the bank. Explore our incredible
            offers on a range of yachts in spectacular destinations.
          </Typography>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={Guest} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                Mare Nostrum is offering a 5% discount on the week of July 6 -
                13 2021
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" color="primary">
                The 43-meter Mare Nostrum was hand-crafted from a variety of
                rare exotic woods collected from different parts of the world in
                2008.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={Guest} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                20% early booking discount on the low season rates
              </Typography>
            </Grid>

            <Grid item>
              <Typography align="center" color="primary">
                The aft section has mainly been left clear for guests to use for
                outdoor exercise, however there are bean bag loungers to port
                for guests to rest in the sunshine.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={Guest} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                Mare Nostrum is offering a 5% discount on the week of July 6 -
                13 2021
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" color="primary">
                The aft section has mainly been left clear for guests to use for
                outdoor exercise, however there are bean bag loungers to port
                for guests to rest in the sunshine.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              size="large"
              className={classes.buttonStyle}
            >
              View All Offers
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
