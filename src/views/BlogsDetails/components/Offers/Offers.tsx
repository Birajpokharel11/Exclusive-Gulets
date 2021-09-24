import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Gallery from './Gallery';
import ExperiencesFrom from './ExperiencesForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '0%',
      position: 'relative'
    },
    food: {
      width: '820px',
      height: '547px',
      objectFit: 'cover',
      display: 'block'
    },

    imageTextShadows: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      zIndex: 1,

      background:
        ' linear-gradient(354.05deg, #091527 4.18%, rgba(9, 21, 39, 0.914539) 43.61%, rgba(9, 21, 39, 0.291523) 88.63%, rgba(9, 21, 39, 0) 94.76%)',
      height: '220px'
    },
    Heading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#F5F0E4'
    },
    SubHeading: {
      textAlign: 'center',
      color: '#F5F0E4',
      fontWeight: 300
    }
  })
);

export default function Offers() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box pl={20} pt={8}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" onClick={handleClick}>
              Material-UI
            </Link>
            <Link
              color="textPrimary"
              href="/getting-started/installation/"
              onClick={handleClick}
            >
              News & Blogs
            </Link>
            <Typography>The art of dining onboard a private yacht</Typography>
          </Breadcrumbs>
        </Box>
        <Box display="flex" style={{ paddingLeft: '7%', paddingRight: '7%' }}>
          <Container style={{ flex: 0.7 }}>
            <Box pt={6}>
              <Typography>
                Among the many pleasures of chartering a private yacht, one that
                stands out for most is the divine, mouth-watering cuisine!
              </Typography>
            </Box>
            <Box pb={3} pt={6}>
              <Typography variant="h2">Gastronomic offerings</Typography>
            </Box>
            <Box pb={8}>
              <Typography>
                Mediterranean cuisine has been amplified by writers the world
                over. The biogeographical region&apos;s tempting gastronomic
                offerings are as diverse and captivating as the countries that
                rest along its shoreline.
                <br />
                <br />
                One of the best ways to not only explore the countries and
                islands spotted throughout the Mediterranean basin is by private
                yacht.
                <br />
                <br />
                Pure comfort aboard one of the finest gulets ever built can only
                be topped by a feast of color and taste prepared with the
                artistic application of regional and seasonal ingredients by a
                world-class chef.
              </Typography>
            </Box>
            <Box>
              <img
                src="/assets/images/blogs/blogs.png"
                alt="HeroYatch"
                className={classes.food}
              />
            </Box>
            <Box pb={3} pt={6}>
              <Typography variant="h2">An experience worth savoring</Typography>
            </Box>
            <Box pb={8}>
              <Typography>
                Fall in love with the art of dining all over again as you sail
                through the Mediterranean waters on your very own private yacht!
                <br />
                <br />
                Now imagine savoring that experience in the privacy that can
                only be enjoyed by you and those you hold dear! Can you picture
                it?
                <br />
                <br />
                As the shores lap up the soft waves crashing on the beach, in
                the picturesque setting of your yacht against the backdrop of
                the open seas, anchored out in the bay for an evening of fine
                dining, laughter, and memorable moments.
              </Typography>
            </Box>
            <Box>
              <Gallery />
            </Box>
          </Container>
          <Container style={{ flex: 0.3 }}>
            <Box
              style={{
                height: '904px',
                width: '400px',
                background: '#F5F0E4',
                padding: '40px 20px 40px 20px'
              }}
            >
              <ExperiencesFrom />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
