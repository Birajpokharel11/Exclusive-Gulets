/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import charterYatch from './assets/images/charterYatch.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 0
    },
    charterBackground: {
      backgroundImage: `url(${charterYatch})`,
      backgroundPosition: 'center',
      height: '23.75rem'
    }
  })
);

export default function CharterYatch() {
  const classes = useStyles();
  return (
    <Container maxWidth="false" className={classes.root}>
      {/* <Image src={charterYatch} alt="charterYatch" /> */}
      <section className={classes.charterBackground}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography color="primary" align="center">
              Charter a Luxury Yacht
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Image src={underLine} alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="primary">
              The most lavish super yacht to turn heads, or an exclusive gulet
              for a perfect family getaway.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}
