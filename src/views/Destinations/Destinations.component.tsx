import React, { useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';
import Router from 'next/router';
import container from './Destinations.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Destinations = (props) => {
  const {
    destination: { loading, destinations, fetchDestinationStart }
  } = props;

  const classes = useStyles();

  const [number, setNumber] = React.useState(10);
  const route = 'destinations';
  const showMore = () => {
    console.log('helloworld', number);
    fetchDestinationStart(5);
  };
  // const redirectDetailsPage = (data) => {
  //   if (route === 'destinations') {
  //     console.log('routse', route);
  //     Router.push({
  //       pathname: `/destinations/${data.title}`,
  //       query: {
  //         id: data.id
  //       }
  //     });
  //   }
  // };

  return (
    <Box>
      <BannerSection
        title="Destinations"
        description="Perfect location and the perfect yacht for your ultimate charter experience. There is no better way than chartering a luxury gulet or yacht to see more of the world. With two third of the Earth covered in water, there is always a new exciting destination to explore and a different shoreline to discover. "
        {...props}
      />

      <Box component="section">
        <BackgroundVectors />
        <Container>
          <Box mb={4}>
            {/*<Typography>{featured_destination.content}</Typography>*/}
          </Box>
          <CardList
            list={destinations}
            showMore={showMore}
            // redirectDetailsPage={redirectDetailsPage}
          />
        </Container>
      </Box>
      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(Destinations);
