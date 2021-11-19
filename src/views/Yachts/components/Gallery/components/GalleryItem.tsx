import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      border: '1px solid white',
      overflow: 'hidden'
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
      minHeight: '360px'
    },
    BoxShadows: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '.85',
      position: 'absolute',
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
    view: {
      transition: '0.5s ease',
      cursor: 'pointer',
      '&:hover': {
        width: '100%',
        transform: 'scale(1.2)'
      }
    },
    details: {
      position: 'absolute',
      bottom: '10%',
      left: '3%',
      color: 'white'
    },
    location: {
      display: 'flex',
      position: 'absolute',

      top: 20,
      right: 10
    }
  })
);
interface Props {
  adminList?: any | [];
  i?: any;
  handleDrawerOpen?: any;
}
export default function GalleryItem({ adminList, handleDrawerOpen, i }: Props) {
  const classes = useStyles();
  console.log('AdminList', adminList);
  const [offers, setOffers] = React.useState(true);
  const math = Math.floor(Math.random() * 1100);
  const guest = Math.floor(Math.random() * 110);

  return (
    <Box className={classes.root}>
      <Box className={classes.view} onClick={() => handleDrawerOpen()}>
        <img
          // src="assets/images/bg/destination_mobile.png"
          src={adminList.mainImage}
          className={classes.Img}
          data-cy={`Gallery Images${i}`}
          alt=""
        />
        <Box className={classes.BoxShadows} />
      </Box>

      <Box className={classes.details}>
        <Typography variant="h4" color="inherit">
          {adminList.name}
        </Typography>
        <Typography variant="h6" color="inherit">
          From € 1134 to € 2243 | {!adminList?.length && math} m |{' '}
          {!adminList.noofpassengers && guest}
        </Typography>
      </Box>
      {/* {/* {(SpecialOffers || InstantBooking) && (
        <Box className={classes.Boxitems}>
          {InstantBooking && (
            <Button
              data-cy={`Special-Offer ${i}`}
              className={classes.SpecialOffer}
            >
              <Typography color="secondary" variant="overline">
                Special Offer
              </Typography>
            </Button>
          )}
          {SpecialOffers && (
            <Button
              color="primary"
              variant="outlined"
              data-cy={`Instant-Offer ${i}`}
              className={classes.InstantOffer}
            >
              <Typography color="secondary" variant="overline">
                Instant Booking
              </Typography>
            </Button>
          )}
          {console.log('New', adminList)}
        </Box>
      )} */}
      <Box className={classes.location}>
        <IconButton>
          <img src="/assets/images/gallery/location.svg" />
        </IconButton>

        <Box style={{ color: 'white' }}>
          <Typography color="inherit" variant="body1" key={i}>
            {adminList?.flags?.countryName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
