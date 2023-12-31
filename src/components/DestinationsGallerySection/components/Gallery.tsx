import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      marginTop: '2.5rem',
      display: 'grid',
      gridGap: '0.7rem',
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
    Typography1: {
      position: 'absolute',
      zIndex: 1,
      top: '1.5rem',
      left: '1.5rem',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px'
    },

    imgShadow1: {
      position: 'absolute',
      width: '100%',
      top: 0,
      height: '70px',
      background:
        'linear-gradient(0deg,rgba(9,21,39,.980392) .01%,rgba(9,21,39,.87) 43.52%,rgba(9,21,39,.24) 93.23%,rgba(9,21,39,0) 99.99%)',
      transform: 'rotate(-180deg)'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    box1: {
      gridColumn: '1/3',
      gridRow: '1/2',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1/5'
      }
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
      gridRow: '2/4',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1/3'
      }
    },
    box5: {
      gridColumn: '2/3',
      gridRow: '2/3',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '3/5'
      }
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
      gridRow: '3/4',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '3/5'
      }
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

export default function PhotoSection({ destinationList }) {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      {destinationList.map((item, i) => (
        <Box
          key={i}
          className={classes[`box${i + 1}`]}
          style={{ position: 'relative' }}
        >
          <img
            src={item?.featured_image?.slider?.url}
            alt="Guest"
            className={classes.image}
          />
          <Typography
            variant="h5"
            color="secondary"
            className={classes.Typography1}
          >
            {item?.title}
          </Typography>
          <div className={classes.imgShadow1} />
        </Box>
      ))}
    </Box>
  );
}
