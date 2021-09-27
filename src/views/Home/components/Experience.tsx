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
import CardWithSlider from '@components/CardWithSlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0',
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
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box component="section" className={classes.root}>
      <Container>
        <Box textAlign="center">
          <Typography variant="h2" color="textPrimary" align="center" stripped>
            Explore Bespoke Experiences
          </Typography>

          <Typography align="center" color="textPrimary" variant="subtitle1">
            ​There is more to yachting than just spending a week or so sailing.
            Special celebration, adrenaline-fuelled adventure or mindful
            relaxation. Our experienced team is dedicated to tailor your great
            escape, whatever the occasion is.
          </Typography>
        </Box>

        <CardWithSlider cardsData={data} />

        <Grid container justifyContent="center">
          <Button
            fullWidth={matchesSM ? undefined : true}
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
