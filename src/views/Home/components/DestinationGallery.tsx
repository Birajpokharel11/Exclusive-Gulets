/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import underLine from '@assets/images/introductionLine.svg';
import Guest from '@assets/images/heroYatch.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root1: {
      marginTop: '6rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    }
  })
);

export default function DestinationGallery() {
  const classes = useStyles();
  return (
    <Box component="section" maxWidth="false">
      <Grid container style={{ paddingTop: '3rem' }}>
        <Grid item container xs={6}>
          <Grid item>
            <Image src={Guest} alt="Guest" />
          </Grid>
          <Grid item></Grid>
        </Grid>

        <Grid item xs={6}>
          <Image src={Guest} alt="Guest" />
        </Grid>
      </Grid>
    </Box>
  );
}
