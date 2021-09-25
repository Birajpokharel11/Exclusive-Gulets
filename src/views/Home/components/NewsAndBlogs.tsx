import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Button } from '@material-ui/core';

import Typography from '@modules/components/Typography';
import CardWithSlider from '@components/CardWithSlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF'
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
  },
  {
    id: '3',
    title: 'The Glamorous Gulet, Mare Nostrum',
    description:
      ' Luxury and value don’t often come in the same package but they do aboard Mare Nostrum, a 144ft gulet, which offers yacht charters on the south-west coast of Turkey...',
    imgPath: '/assets/images/yatchYoga.png'
  }
];

export default function NewsAndBlogs(props) {
  const { postsList } = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Box textAlign="center">
          <Typography variant="h2" color="textPrimary" align="center" stripped>
            News & Blogs
          </Typography>

          <Typography align="center" color="textPrimary" variant="subtitle1">
            Keep up to date with our latest yachting news, charter destinations,
            special offers and more.
          </Typography>
        </Box>

        <CardWithSlider cardsData={data} />

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            size="large"
            className={classes.buttonStyle}
          >
            View All News & Blogs
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
