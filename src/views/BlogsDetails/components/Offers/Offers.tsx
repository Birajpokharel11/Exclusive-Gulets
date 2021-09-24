import React from 'react';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  useMediaQuery
} from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Gallery from './Gallery';
import ExperiencesFrom from './ExperiencesForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      padding: '5% 15% 5% 15%',
      [theme.breakpoints.down('lg')]: { padding: '5% 10% 5% 15%' },
      [theme.breakpoints.down('md')]: { padding: '8% 5% 5% 5%' }
    },
    Flex1: {
      flex: 0.7,
      [theme.breakpoints.down('lg')]: { flex: 1 }
    },
    Flex2: {
      flex: 0.3,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.down('lg')]: {},
      padding: '0'
    },
    Enquery: {
      height: '904px',
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '300px'
      },
      background: '#F5F0E4',
      padding: '40px 20px 40px 20px'
    },

    Underline: { textDecoration: 'none', color: 'rgb(52, 152, 219)' },
    Heading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#F5F0E4'
    },
    SubHeading: {
      textAlign: 'center',
      color: '#F5F0E4',
      fontWeight: 300
    },
    EnquireTM: {
      width: '100%',
      background: '#f5f0e4',
      position: 'fixed',
      bottom: 0,
      height: '116px',
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
    ButtonTM: {
      minWidth: '260px',
      minHeight: '52px',
      color: 'white',
      backgroundColor: '#2A398D',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    }
  })
);

export default function Offers() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <>
      <Box>
        <Box display="flex" className={classes.Container}>
          <Container maxWidth={matches ? 'md' : 'lg'} className={classes.Flex1}>
            <Box pb={8}>
              <Typography variant="body1">
                With Covid-19 vaccinations in full swing in the United States,
                the UK, and other countries across the world, we're excited that
                international travel is taking off again.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                The Caribbean, of course, is one of the most sought-after
                destinations on travellers' lists for the{' '}
                <Link href="https://www.forbes.com/sites/suzannerowankelleher/2021/05/15/summer-travel-guide-2021-vacations-are-selling-out-fast-heres-how-to-outsmart-the-crowds-plan-b/amp/">
                  <span
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(52, 152, 219)'
                    }}
                  >
                    summer
                  </span>
                </Link>
                <a></a>. It is also the perfect yacht charter destination with
                endless possibilities.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                <strong>In a class of its own</strong>
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                If you're in search of sugar-white, sun-kissed beaches, a warm,
                balmy climate, hospitable people, and beautiful scenery, the
                {'  '}
                <Link href="https://www.exclusivegulets.com/destinations/caribbean">
                  <span className={classes.Underline}>
                    {' '}
                    {'  '}Caribbean {'  '}
                  </span>
                </Link>
                has it all!
              </Typography>

              <Typography variant="body1">
                This acclaimed beach vacation destination is embroidered with
                dozens of{' '}
                <Link href="https://www.tripadvisor.co.za/Attractions-g147237-Activities-Caribbean.html">
                  <span className={classes.Underline}>
                    {' '}
                    picturesque islands
                  </span>
                </Link>
                , each unique in character and appeal.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Of course, chartering a yacht for a vacation is pure bliss on
                water. If the word 'boring' pops up in your mind, think again.
                The Caribbean is brimming with aquatic life and boasts some of
                the world's best dives.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                <strong>Tailored to your every desire</strong>
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Clear blue skies and inviting azure waters are an invitation
                like no other to spend all your pent-up energy from staying
                indoors on lockdown on a choice of water sports, from jet skis
                and stand-up paddling to snorkelling and windsurfing. Your own
                private lessons in the vicinity of your yacht can also be
                arranged.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Exclusive Gulets will arrange the best itineraries to suit you!
                On board celebrations, exciting excursions, bookings at the
                finest restaurant in town, sundown cocktails, spa treatments,
                fitness instruction, and just plain old fun in the sun for the
                whole family can all be part of the mix.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                The calm sailing seas of the Caribbean make it a great location
                to explore by sea. There is plenty to explore and different
                shorelines to discover.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                <strong>Private travel has never been this appealing</strong>
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Sailing this tropical region, which is a fantastic
                all-year-round destination, you can still keep your social
                distance by staying with your ow
              </Typography>

              <Typography variant="body1">
                n private group of family and friends as you roam the islands.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                In addition, you will also have your own professional crew to
                take care of your every need, and a world-class chef to whip up
                mouth-watering{' '}
                <Link href="https://www.exclusivegulets.com/blogs/the-art-of-dining-onboard-a-private-yacht">
                  <span className={classes.Underline}> cuisine</span>
                </Link>{' '}
                for breakfast, lunch, and dinner… and a few scrumptious snacks
                in-between. An experienced captain will ensure your overall on
                board experience will meet all your expectations within the
                safety requirements of the yacht charter.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                <strong>Exceptional yachting is only a click away</strong>
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Exclusive Gulets are luxury gulet and yacht charter experts that
                deliver exceptional cruising experiences on some of the world's
                finest motor sailers.
              </Typography>

              <Typography variant="body1">
                Browse through our phenomenal selection of{' '}
                <Link href="https://www.exclusivegulets.com/yachts">
                  <span className={classes.Underline}> yachts</span>
                </Link>{' '}
                in the Caribbean.
              </Typography>

              <p>&nbsp;</p>

              <Typography variant="body1">
                Get in touch with the team today for your very own tailor-made
                experience on water!
              </Typography>
            </Box>
            <Box pb={3} pt={6}>
              <Typography variant="h2">An experience worth savoring</Typography>
            </Box>
            <Box pb={8}>
              <Typography variant="body1">
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

          <Container className={classes.Flex2}>
            <Box className={classes.Enquery}>
              <ExperiencesFrom />
            </Box>
          </Container>
        </Box>
      </Box>
      <Box className={classes.EnquireTM}>
        <Grid container alignItems="center" style={{ padding: '32px 22px' }}>
          <Grid item xs>
            <Box>
              <Typography variant="h2" align="center">
                {' '}
                Create your own experience!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            {' '}
            <Box display="felx" alignItems="center">
              <Button className={classes.ButtonTM}>Enquite</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
