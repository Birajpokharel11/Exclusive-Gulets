/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import HeroYatch from '@assets/images/heroYatch.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      background: '#F7F7F7',
      height: '122px'
    },
    charterBackground: {
      backgroundImage: `url('./charterYatch.png')`,
      backgroundPosition: 'center',
      height: '61.875rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    }
  })
);

export default function HeroSection() {
  const classes = useStyles();
  return (
    <>
      <Box
        component="section"
        maxWidth="false"
        className={classes.charterBackground}
      />

      {/* <Box width="100%">
        <Image src={HeroYatch} alt="HeroYatch" className={classes.Yatch} />
      </Box> */}
    </>
  );
}
