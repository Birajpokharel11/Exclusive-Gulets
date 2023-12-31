import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createMarkup } from '@utils/misc';

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      backgroundColor: 'skyblue',
      marginTop: '53px',
      width: '100%',
      height: 'auto',
      paddingLeft: '100px'
    },
    Typography: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: '22px',
      minwidth: '505px',
      color: '#2A398D',
      paddingTop: '20px',
      [theme.breakpoints.down(560)]: {
        width: '363px',
        textAlign: 'justify'
      },
      [theme.breakpoints.down(385)]: {
        width: '300px',
        fontSize: '16px'
      },
      [theme.breakpoints.up(1400)]: {
        width: '505px'
      }
    },
    Typography1: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '32px',
      color: '#2A398D',
      [theme.breakpoints.down(430)]: {
        fontSize: '24px'
      }
    },
    Typography2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      paddingTop: '64px',
      color: '#2A398D'
    },

    Box: { padding: '0%', paddingTop: '65px', display: 'flex' },

    Images: {
      flex: '50%',
      display: 'flex',
      justifyContent: 'flex-end',
      // maxwidth: '1268.61px',
      height: '770px',
      objectFit: 'cover',
      [theme.breakpoints.down(1444)]: {
        width: '500px',
        height: '750px'
      },
      [theme.breakpoints.down(1221)]: {
        width: '400px',
        height: '650px'
      },
      [theme.breakpoints.down(900)]: {
        display: 'none'
      }
    },
    TextPosition: {
      paddingLeft: '100px',
      paddingRight: '100px',
      [theme.breakpoints.down(1110)]: {
        paddingRight: '10px'
      },
      width: '100%',
      flex: '50%',
      [theme.breakpoints.down(900)]: {
        paddingRight: '5%',
        paddingLeft: '5%'
      },
      [theme.breakpoints.down(560)]: {
        paddingRight: '2%',
        paddingLeft: '9%'
      },
      [theme.breakpoints.down(385)]: {
        paddingRight: '0%',
        paddingLeft: '9%'
      },
      [theme.breakpoints.down(325)]: {
        paddingRight: '1%',
        paddingLeft: '3%'
      }
    },
    mobileImage: {
      display: 'none',
      [theme.breakpoints.down(900)]: {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        paddingTop: '32px',
        [theme.breakpoints.down(560)]: {
          width: '343px'
        },
        [theme.breakpoints.down(385)]: {
          width: '300px'
        }
      }
    },
    Grid: {
      width: '505px',
      [theme.breakpoints.down(560)]: {
        paddingLeft: '10%',
        width: '113px'
      }
    },
    Pictext: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D'
    }
  })
);

export default function Description(props) {
  const { data } = props;
  const itemData = [
    {
      img: '/assets/images/Game.svg',
      title: 'Game Consols'
    },

    {
      img: '/assets/images/Wifi.svg',
      title: 'Free Wi Fi'
    },
    {
      img: '/assets/images/Satellite.svg',
      title: 'Satellite TV'
    },
    {
      img: '/assets/images/Air.svg',
      title: 'Air Conditioning'
    },
    {
      img: '/assets/images/Deck.svg',
      title: 'Deck Jacuzzi'
    },
    {
      img: '/assets/images/Ipod.svg',
      title: 'Ipod Docking'
    },
    {
      img: '/assets/images/Sauna.svg',
      title: 'Sauna'
    }
  ];
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const classes = useStyles();
  return (
    <div style={{ marginBottom: '10%' }}>
      <Breadcrumbs
        style={{
          paddingTop: '58px',
          paddingLeft: '100px'
        }}
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
          Core
        </Link>
        <Typography>Breadcrumb</Typography>
      </Breadcrumbs>
      <Box maxWidth="false" className={classes.Box}>
        <div className={classes.TextPosition}>
          <Typography
            className={classes.Typography1}
            style={{ textTransform: 'capitalize' }}
          >
            About {!data?.name && 'Aresteas Sailor'}
          </Typography>
          <Typography
            className={clsx(classes.Typography)}
            dangerouslySetInnerHTML={createMarkup(
              !data?.about &&
                'Built in 2011, Corsario is a 56m (inc. bowsprit) modern classic sailing yacht, an authentic schooner, that combines state of the art construction with a timeless and elegant design that harks back to the classic yachts of the previous century. Exceptional seakeeping and performance under sail make her an exciting base for those looking to experience the thrills of traditional sailing and life right on the water. Corsario’s experienced Greek crew of seven are experts in all that the Greek islands have to offer and will help create an unforgettable custom itinerary for her lucky guests.'
            )}
          />
          <div>
            <img
              src="/assets/images/Aresteas.svg"
              className={classes.mobileImage}
              data-cy="Atesteas"
            />
          </div>
          <Typography className={classes.Typography2}>
            AMENITIES & ENTERTAINMENT
          </Typography>
          <Typography
            className={classes.Typography}
            style={{ paddingBottom: '61px' }}
            dangerouslySetInnerHTML={createMarkup(
              !data?.entertainment &&
                'Sauna, Air Conditioning, Deck Jacuzzi, WiFi connection on board. Luxury Charter yacht Corsario is a gulet yacht, read our online guide for more information on gulet Yacht Charter.'
            )}
          />

          <Grid container className={classes.Grid}>
            {itemData.map((item, i) => (
              <Grid
                item
                key={i}
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: 'flex'
                }}
              >
                <img src={item.img} alt={item.title} />
                <Typography className={classes.Pictext}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <img src="/assets/images/MobilePic2.svg" className={classes.Images} />
        </div>
      </Box>
    </div>
  );
}
