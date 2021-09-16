import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import Guest from 'public/assets/images/heroYatch.png';
import CardWithSlider from '@components/CardWithSlider';

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

const specialOffers = [
  {
    id: '1',
    title: 'Free All Inclusive Package for Estrella De Mar - Save up to €6,300',
    description:
      'Save up to €6,300 with our complementary All Inclusive Package. Why worry about the extra costs, when we have got it all covered! We are delighted to offer our comprehensive All-Inclusive Package completely free! ',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    id: '2',
    title: 'Last Chance to Secure a Charter in 2021 at Preferential Rates',
    description:
      'All About U II is without a doubt one of the finest sailing yachts available for charter in the Mediterranean. Now you have the opportunity to sail on this beautiful boat at a reduced rate. Please contact us for more information.  ',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    id: '3',
    title:
      'Save up to €9,450 with Complementary All Inclusive Package - Queen of Salmakis',
    description:
      'Why worry about the extra costs, when we have got it all covered! We are delighted to offer our comprehensive All-Inclusive Package completely free! Save up to €9,450 with our complementary All Inclusive Package.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  }
];

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
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

        <CardWithSlider cardsData={specialOffers} />
      </Container>
      {/* <Grid container justifyContent="center" alignItems="center" spacing={2}>
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
                  The aft section has mainly been left clear for guests to use
                  for outdoor exercise, however there are bean bag loungers to
                  port for guests to rest in the sunshine.
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
                  The aft section has mainly been left clear for guests to use
                  for outdoor exercise, however there are bean bag loungers to
                  port for guests to rest in the sunshine.
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
          <Grid item container justifyContent="center">
            <Button
              variant="contained"
              size="large"
              className={classes.buttonStyle}
            >
              View All Offers
            </Button>
          </Grid>
        </Grid> */}
    </Box>
  );
}
