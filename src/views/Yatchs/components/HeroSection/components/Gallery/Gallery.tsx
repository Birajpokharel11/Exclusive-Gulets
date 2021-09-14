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
    ButtonOffers: {
      textTransform: 'capitalize'
    },
    Boxitems: {
      display: 'flex',
      gap: '0.5rem',
      position: 'absolute',
      bottom: '70%',
      flexDirection: 'column',
      [theme.breakpoints.down(1440)]: {
        bottom: '60%'
      }
    },
    location: {
      display: 'flex',
      position: 'absolute',
      bottom: '40%',
      left: '180%',
      right: '0'
    }
  })
);

export default function Gallery() {
  const classes = useStyles();

  const [offers, setOffers] = React.useState(true);
  const Gallery = [
    {
      img: '/assets/images/gallery/Yatchs1.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs1.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs1.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs2.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs3.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    },
    {
      img: '/assets/images/gallery/Yatchs4.png',
      title: 'ARESTEAS',
      subtitle: 'From €145.000 to €165.000 | 166m | 10 Guests ',
      location: 'France,Monaco',
      offers: true,
      cols: 'Turkey'
    }
  ];
  return (
    <Box>
      <Grid container>
        {Gallery.map((item, i) => (
          <Grid item md={4} lg={3} xl={2} key={i}>
            {' '}
            <Box style={{ position: 'relative', border: '1px solid white' }}>
              <img
                src={item.img}
                style={{ display: 'block', objectFit: 'cover', width: '100%' }}
              />
              <Box
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '1%',
                  color: 'white'
                }}
              >
                <Typography color="inherit">{item.title} </Typography>
                <Typography color="inherit">{item.subtitle}</Typography>
              </Box>
              <Box className={classes.Boxitems}>
                {item.offers && (
                  <>
                    <Button
                      variant="contained"
                      className={classes.ButtonOffers}
                    >
                      Special Offer
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.ButtonOffers}
                    >
                      Instant Booking
                    </Button>
                  </>
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
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
