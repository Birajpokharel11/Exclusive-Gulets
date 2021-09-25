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
      padding: '0 1rem',
      gridTemplateRows: 'repeat(3, 20vw)',
      [theme.breakpoints.up('md')]: {
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
      gridColumn: '1/4',
      gridRow: '1/2',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1/5'
      }
    },
    box2: {
      display: 'none'
    },
    box3: {
      display: 'none'
    },
    box4: {
      gridColumn: '1/3',
      gridRow: '2/4',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1/3'
      }
    },
    box5: {
      gridColumn: '3/3',
      gridRow: '2/3',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '3/5'
      }
    },
    box6: {
      display: 'none'
    },
    box7: {
      gridColumn: ' 3/3',
      gridRow: '3/4',
      [theme.breakpoints.down('sm')]: {
        gridColumn: '3/5'
      }
    },
    box8: {
      display: 'none'
    }
  })
);
const Images = [
  {
    src: '/assets/images/destinationPic/images3.png',
    typography: 'Destination Name'
  },
  {
    src: '/assets/images/destinationPic/images1.png',
    typography: 'Destination Name'
  },
  {
    src: '/assets/images/destinationPic/images5.png',
    typography: 'Destination Name'
  },
  {
    src: '/assets/images/destinationPic/images5.png',
    typography: 'Destination Name'
  },
  {
    src: '/assets/images/destinationPic/images4.jpg',
    typography: 'Destination 1'
  },
  {
    src: '/assets/images/destinationPic/images6.jpg',
    typography: 'Destination 2'
  },
  {
    src: '/assets/images/destinationPic/images6.jpg',
    typography: 'Destination Name'
  },
  {
    src: '/assets/images/destinationPic/images3.png',
    typography: 'Destination Name'
  }
];
export default function Gallery() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      {Images.map((item, i) => (
        <Box
          key={i}
          className={classes[`box${i + 1}`]}
          style={{ position: 'relative' }}
        >
          <Image
            layout="fill"
            src={item.src}
            alt="Guest"
            className={classes.image}
          />
          <Typography
            variant="h5"
            color="secondary"
            className={classes.Typography1}
          >
            {item.typography}
          </Typography>
          <div className={classes.imgShadow1} />
        </Box>
      ))}
    </Box>
  );
}
