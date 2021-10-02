import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MobileSlider from './components/MobileSlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      boxShadow: 'none'
    },
    listHeader: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '32px',
      color: '#2A398D',
      textAlign: 'center'
    },
    listText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      color: '#2A398D'
    },
    listitemText2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      color: '#2A398D'
    },
    Destinations: {
      paddingTop: '3%',
      [theme.breakpoints.down(1030)]: {
        paddingLeft: '6%'
      }
    }
  })
);

function Destinations({ data }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(500));

  return (
    <Paper
      elevation={0}
      style={{
        width: '100%',
        minHeight: '870px',
        paddingBottom: '10%',
        background: ' #F5F0E4'
      }}
    >
      <Container
        style={{
          paddingTop: '5%'
        }}
      >
        <Typography
          className={classes.listHeader}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Destinations Within Sailing Distance
        </Typography>
        <Typography
          className={classes.listText}
          style={{
            display: 'flex',
            textAlign: 'justify',
            paddingTop: '48px'
          }}
        >
          A text like discover those destinations with your perfect yacht will
          be written here. Perfect location and the perfect yacht for your
          ultimate charter experience. Earth covered in water, there is always a
          new exciting destination to explore.
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.Destinations}>
        {!matches ? (
          <Grid container justifyContent="space-around">
            {data.map((destination) => (
              <Grid item xs>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={destination.featured_image?.url}
                      style={{
                        width: '400px',
                        height: '400px',
                        objectFit: 'cover'
                      }}
                      title="title"
                    />
                    <CardContent style={{ backgroundColor: '#F5F0E4' }}>
                      <Typography
                        gutterBottom
                        style={{ textAlign: 'center' }}
                        className={classes.listitemText}
                      >
                        {destination?.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.listitemText2}
                      >
                        {destination?.meta_description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <MobileSlider />
        )}
      </Container>
    </Paper>
  );
}

export default Destinations;
