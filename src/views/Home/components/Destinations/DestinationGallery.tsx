import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      marginTop: '2.5rem',
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(3, 18vw)',
      padding: '0 1rem',
      [theme.breakpoints.down('md')]: {
        gridTemplateRows: 'repeat(3, 20vw)'
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateRows: 'repeat(3, 44vw)'
      }
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    box1: {
      gridColumn: '1/3',
      gridRow: '1/2'
    },
    box2: {
      gridColumn: '3/4',
      gridRow: '1/2',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    box3: {
      gridColumn: '4/5',
      gridRow: '1/3',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    box4: {
      gridColumn: '1/2',
      gridRow: '2/4'
    },
    box5: {
      gridColumn: '2/3',
      gridRow: '2/3'
    },
    box6: {
      gridColumn: '3/4',
      gridRow: '2/3',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    box7: {
      gridColumn: ' 2/3',
      gridRow: '3/4'
    },
    box8: {
      gridColumn: '3/5',
      gridRow: '3/4',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  })
);

export default function DestinationGallery() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.box1}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box2}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box3}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box4}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box5}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box6}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box7}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
      <Box className={classes.box8}>
        <img
          src="assets/images/heroYatch.png"
          alt="Guest"
          className={classes.image}
        />
      </Box>
    </Box>
  );
}
