import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Button, Hidden } from '@material-ui/core';
import Underline from '@assets/images/svg/blue_large_underline.svg';
import Wheel from '@assets/images/Why_Charter/wheel.svg';

import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '60px 0',
      position: 'relative',
      height: '40vh'
    },
    btnLabel: {
      color: '#ab3996',
      fontSize: '16px',
      fontWeight: 400,
      marginTop: '40px'
    },
    wheelImage: {
      position: 'absolute',
      right: 0,
      bottom: -80,
      zIndex: -10,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  })
);

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography
            color="textPrimary"
            align="center"
            variant="h2"
            id="home-intro"
            stripped
          >
            Luxury Gulet & Yacht Charter Experts since 2009
          </Typography>

          <Typography align="center" color="textPrimary" variant="subtitle1">
            Exclusive Gulets was founded when not many people new the meaning of
            “Gulet”. In less than a decade, we broke the mould! Our passion for
            these beautifully handcrafted vessels and commitment for our clients
            helped us introduce many of you the incredible concept of “Luxury
            Gulet Cruising”.{' '}
          </Typography>

          <Button
            size="small"
            classes={{ label: classes.btnLabel }}
            disableTouchRipple
          >
            Read More
          </Button>
        </Box>
      </Container>
      <div className={classes.wheelImage}>
        <Image src={Wheel} className="img-responsive" alt="vector" />
      </div>
    </Box>
  );
}
