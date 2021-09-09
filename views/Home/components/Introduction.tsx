/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import underLine from 'assets/images/introductionLine.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      background: '#F7F7F7',
      height: '122px'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    }
  })
);

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box width="100%">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography color="primary" align="center">
            Luxury Gulet & Yacht Charter Experts since 2009
          </Typography>
        </Grid>

        <Grid item container justifyContent="center" xs={12}>
          <Image src={underLine} alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" color="primary">
            Exclusive Gulets was founded when not many people new the meaning of
            “Gulet”. In less than a decade, we broke the mould! Our passion for
            these beautifully handcrafted vessels and commitment for our clients
            helped us introduce many of you the incredible concept of “Luxury
            Gulet Cruising”.{' '}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
