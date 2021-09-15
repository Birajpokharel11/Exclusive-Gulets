import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { Box, Button, Grid, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '167px'
      }
    },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    },
    SpecialOffer: {
      textTransform: 'capitalize',
      zIndex: 2,
      '&:hover': {
        background: 'rgba(12, 22, 37, 0.6)'
      }
    },
    InstantBooking: {
      background: '#AB3996',
      color: 'white',
      textTransform: 'capitalize',
      zIndex: 2,

      '&:hover': {
        background: '#AB3996'
      }
    },
    Img: {
      display: 'block',
      objectFit: 'cover',
      width: '100%',
      opacity: '0.85'
    },
    BoxShadows: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      mixBlendMode: 'normal',
      zIndex: 1,

      background:
        'linear-gradient(180deg, #071529 0%, rgba(7, 21, 41, 0) 50%, #071529 100%)'
    },
    Boxitems: {
      display: 'flex',
      gap: '0.5rem',
      position: 'absolute',
      bottom: '70%',
      flexDirection: 'column',
      [theme.breakpoints.down(1440)]: {
        bottom: '60%'
      },
      [theme.breakpoints.down(2327)]: {
        bottom: '58%'
      }
    },
    location: {
      display: 'flex',
      position: 'absolute',
      zIndex: 2,
      top: 20,
      right: 10
    }
  })
);

export default function Gallery() {
  const classes = useStyles();

  const [offers, setOffers] = React.useState(true);
  const Gallery = [
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: false,

      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,

      InstantBooking: false,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs1.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,

      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,

      InstantBooking: false,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: false,
      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,

      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs1.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: false,
      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,
      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,
      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: false,
      InstantBooking: false,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,
      InstantBooking: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      SpecialOffers: true,
      InstantBooking: true,
      cols: 'Turkey'
    }
  ];
  return (
    <Box>
      <Grid container>
        {Gallery.map((item, i) => (
          <Grid
            item
            md={4}
            lg={3}
            xl={2}
            key={i}
            style={{
              position: 'relative',
              border: '1px solid white'
            }}
          >
            <Box>
              <img src={item.img} className={classes.Img} />
              {/* <div className={classes.BoxShadows} /> */}
              <Box
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '1%',
                  color: 'white',
                  zIndex: 2
                }}
              >
                <Typography color="inherit">{item.title} </Typography>
                <Typography color="inherit">{item.subtitle}</Typography>
              </Box>
              {(item.SpecialOffers || item.InstantBooking) && (
                <Box className={classes.Boxitems}>
                  {item.SpecialOffers && (
                    <>
                      <Button
                        color="primary"
                        variant="outlined"
                        className={classes.SpecialOffer}
                      >
                        Special Offer
                      </Button>
                    </>
                  )}
                  {item.InstantBooking && (
                    <Button
                      data-cy={`Instant-Booking`}
                      className={classes.InstantBooking}
                    >
                      Instant Booking
                    </Button>
                  )}
                </Box>
              )}

              <Box className={classes.location}>
                <IconButton>
                  <img src="/assets/images/gallery/location.svg" />
                </IconButton>

                <Box>
                  <Typography variant="body2">France,Monaco </Typography>
                  <Typography>Turkey</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
