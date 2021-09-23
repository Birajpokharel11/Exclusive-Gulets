import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import YatchParty from 'public/assets/images/yatchParty.png';
import YatchYoga from 'public/assets/images/yatchYoga.png';
import underLine from 'public/assets/images/introductionLine.svg';

import CardWithSlider from '@components/CardWithSlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '2rem',
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    }
  })
);

const data = [
  {
    id: '1',
    title: 'What to expect when chartering a gulet or yacht?',
    description:
      'Chartering a yacht or gulet for a vacation is pure bliss on water. What more can you ask for with a trained crew to take care of your every need, a world-class chef to...',
    imgPath: '/assets/images/yatchParty.png'
  },
  {
    id: '2',
    title: 'The Art of Dining Onboard a Private Yacht',
    description:
      'Among the many pleasures of chartering a private yacht, one that stands out for most is the divine, mouth-watering cuisine!',
    imgPath: '/assets/images/yatchYoga.png'
  }
];

export default function Experience() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
          style={{ paddingTop: '5rem' }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" color="textPrimary" align="center">
              Explore Bespoke Experiences
            </Typography>
          </Grid>

          <Grid item container justifyContent="center" xs={12}>
            <img src="/assets/images/introductionLine.svg" alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              ​There is more to yachting than just spending a week or so
              sailing. Special celebration, adrenaline-fuelled adventure or
              mindful relaxation. Our experienced team is dedicated to tailor
              your great escape, whatever the occasion is.
            </Typography>
          </Grid>
        </Grid>

        <CardWithSlider cardsData={data} md={6} />

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            size="large"
            className={classes.buttonStyle}
          >
            View All Experiences
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
