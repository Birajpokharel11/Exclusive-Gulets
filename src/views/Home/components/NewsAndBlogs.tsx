import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import YatchParty from 'public/assets/images/yatchParty.png';
import YatchYoga from 'public/assets/images/yatchYoga.png';
import underLine from 'public/assets/images/smallBlueUnderline.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '2rem'
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

export default function NewsAndBlogs() {
  const classes = useStyles();
  return (
    <Box maxWidth="false" className={classes.root}>
      <Container maxWidth="xl">
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
              News & Blogs
            </Typography>
          </Grid>

          <Grid item container justifyContent="center" xs={12}>
            <Image src={underLine} alt="underline" />
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="subtitle1">
              Keep up to date with our latest yachting news, charter
              destinations, special offers and more.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={YatchParty} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                What to expect when chartering a gulet or yacht?{' '}
              </Typography>
            </Grid>

            <Grid item>
              <Typography align="center" color="primary">
                Chartering a yacht or gulet for a vacation is pure bliss on
                water. What more can you ask for with a trained crew to take
                care of your every need, a world-class chef to...
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={YatchYoga} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                The Art of Dining Onboard a Private Yacht{' '}
              </Typography>
            </Grid>

            <Grid item>
              <Typography align="center" color="primary">
                Among the many pleasures of chartering a private yacht, one that
                stands out for most is the divine, mouth-watering cuisine!
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={4} xs={12} spacing={2}>
            <Grid item container justifyContent="center">
              <Image src={YatchYoga} alt="guest" />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography color="primary" align="center">
                The Glamorous Gulet, Mare Nostrum
              </Typography>
            </Grid>

            <Grid item>
              <Typography align="center" color="primary">
                Luxury and value don’t often come in the same package but they
                do aboard Mare Nostrum, a 144ft gulet, which offers yacht
                charters on the south-west coast of Turkey...
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center">
            <Button variant="contained" className={classes.buttonStyle}>
              View All News & Blogs
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
