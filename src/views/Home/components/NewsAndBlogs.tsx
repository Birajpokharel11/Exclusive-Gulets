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
      padding: '4rem 0'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
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
  const { posts } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  const getSlice = () => {
    return posts.slice(0, 3);
  };

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h2" color="textPrimary" align="center" stripped>
            News & Blogs
          </Typography>

          <Typography align="center" color="textPrimary" variant="subtitle1">
            Keep up to date with our latest yachting news, charter destinations,
            special offers and more.
          </Typography>
        </Box>

        <CardWithSlider cardsData={getSlice()} />

        <Grid container justifyContent="center">
          <Button
            fullWidth={matchesSM ? undefined : true}
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
