/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 0
    },
    charterBackground: {
      backgroundImage: `url('/assets/images/charterYatch.png')`,
      backgroundPosition: 'center',
      height: '23.75rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    textColor: {
      color: '#ffffff'
    }
  })
);

export default function CharterYatch() {
  const classes = useStyles();
  return (
    <Box
      component="section"
      maxWidth="false"
      className={classes.charterBackground}
    >
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: '5rem' }}
        >
          <Grid item xs={12}>
            <Typography
              color="primary"
              align="center"
              variant="h4"
              className={classes.textColor}
            >
              Charter a Luxury Yacht
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <img src="/assets/images/charterYatch.png" alt="underline" />
          </Grid>
          <Grid item>
            <Typography
              align="center"
              color="primary"
              className={classes.textColor}
              variant="subtitle2"
            >
              The most lavish super yacht to turn heads, or an exclusive gulet
              for a perfect family getaway.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
