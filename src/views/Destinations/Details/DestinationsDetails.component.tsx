import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Box, Container } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import ContentSection from '@components/ContentSection';

import container from './DestinationsDetails.container';
import Typography from '@modules/components/Typography';
import YachtList from './components/YachtList';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    selectionYachtHeader: {
      color: '#cc9855',
      fontWeight: 700
    },
    destinationHeader: {
      color: '#cc9855',
      fontWeight: 700
    }
  })
);

const DestinationsDetails = (props) => {
  const classes = useStyles();

  const {
    destination: {
      loading,
      destinations,
      destination: {
        featured_destination,
        destinations: otherDestinations,
        yachts
      }
    }
  } = props;

  return (
    <div>
      <BannerSection
        {...props}
        title={featured_destination?.title}
        description={featured_destination?.description}
        backgroundImage={featured_destination.featured_image?.url}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <ContentSection
          contentData={featured_destination}
          route="destinationDetails"
        />
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        <Box component="section" maxWidth="false" mt={9}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <Typography variant="h2" className={classes.selectionYachtHeader}>
                EXCLUSIVE GULETS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">A Selection of Yachts</Typography>
            </Grid>
          </Grid>
          <YachtList cardList={yachts} />
        </Box>
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        <Box component="section" maxWidth="false" mt={9}>
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid item>
                <Typography
                  variant="h2"
                  className={classes.selectionYachtHeader}
                >
                  DESTINATIONS
                </Typography>
              </Grid>
              <Grid item> 
                <Typography variant="h2">
                  Discover secret locations around the world
                </Typography>
              </Grid>
            </Grid>
            <CardList list={otherDestinations} />
          </Container>
        </Box>
      )}
    </div>
  );
};

export default container(DestinationsDetails);
