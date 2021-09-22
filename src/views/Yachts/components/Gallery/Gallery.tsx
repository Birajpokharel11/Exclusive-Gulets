import React from 'react';
import Link from 'next/link';

import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { Box, Button, Grid, IconButton, Typography } from '@material-ui/core';

import PaginationSection from './PaginationComponents';

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
    InstantOffer: {
      textTransform: 'capitalize',
      width: '119px',
      height: '38px',
      borderRadius: '0',

      '&:hover': {
        background: 'rgba(12, 22, 37, 0.6)'
      }
    },
    SpecialOffer: {
      background: '#AB3996',
      color: 'white',
      width: '109px',
      height: '38px',
      borderRadius: '0',
      textTransform: 'capitalize',

      '&:hover': {
        background: '#AB3996'
      }
    },
    Img: {
      display: 'block',
      objectFit: 'cover',
      width: '100%',
      opacity: '0.95',
      transition: '0.9s ease',
      '&:hover': {
        overflow: 'hidden',
        width: '100%',
        transform: 'scale(1.4)'
      }
    },
    BoxShadows: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      mixBlendMode: 'normal',

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
          <Link
            href={{
              pathname: '/yachts/[slug]',
              query: { slug: '1' }
            }}
            key={i}
          >
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              lg={3}
              xl={2}
              key={i}
              style={{
                position: 'relative',
                border: '1px solid white',
                cursor: 'pointer'
              }}
            >
              <Box style={{ overflow: 'hidden' }}>
                <img
                  src={item.img}
                  className={classes.Img}
                  data-cy={`Gallery Images${i}`}
                />
                <Box
                  style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '3%',
                    color: 'white'
                  }}
                >
                  <Typography variant="h4" color="inherit">
                    {item.title}{' '}
                  </Typography>
                  <Typography variant="h6" color="inherit">
                    {item.subtitle}
                  </Typography>
                </Box>
                {(item.SpecialOffers || item.InstantBooking) && (
                  <Box className={classes.Boxitems}>
                    {item.InstantBooking && (
                      <Button
                        data-cy={`Special-Offer ${i}`}
                        className={classes.SpecialOffer}
                      >
                        <Typography color="secondary" variant="overline">
                          {' '}
                          Special Offer
                        </Typography>
                      </Button>
                    )}
                    {item.SpecialOffers && (
                      <Button
                        color="primary"
                        variant="outlined"
                        data-cy={`Instant-Offer ${i}`}
                        className={classes.InstantOffer}
                      >
                        <Typography color="secondary" variant="overline">
                          Instant Offer
                        </Typography>
                      </Button>
                    )}
                  </Box>
                )}

                <Box className={classes.location}>
                  <IconButton>
                    <img src="/assets/images/gallery/location.svg" />
                  </IconButton>

                  <Box style={{ color: 'white' }}>
                    <Typography color="inherit" variant="body1">
                      France,Monaco
                    </Typography>
                    <Typography color="inherit" variant="body1">
                      Turkey
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Link>
        ))}
      </Grid>
      <PaginationSection />
    </Box>
  );
}
