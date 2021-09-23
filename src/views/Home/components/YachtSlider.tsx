import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';

import underLine from 'public/assets/images/smallBlueUnderline.svg';

import CustomSlider from '@components/CustomSlider';
import { slider } from '../../../mocks/_homeSliderMock';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    connectorLine: {
      borderTopWidth: '999px'
    },
    stepIconRoot: {
      color: 'pink',
      '&.MuiStepIcon-active': {
        color: 'red'
      },
      '&.MuiStepIcon-completed': {
        color: 'green'
      }
    }
  })
);

export default function YatchSlider() {
  const classes = useStyles();
  return (
    <Box component="section" maxWidth="false" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: '3rem' }}
      >
        <Grid item xs={12}>
          <Typography color="textPrimary" align="center" variant="h2">
            Loved by our Guests
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" xs={12}>
          <Image src={underLine} alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" color="textPrimary" variant="subtitle1">
            Recently Confirmed Charters
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <CustomSlider sliderData={slider} />
      </Container>
    </Box>
  );
}
