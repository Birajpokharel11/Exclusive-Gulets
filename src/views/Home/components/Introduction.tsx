import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';

import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0'
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
        </Box>
      </Container>
    </Box>
  );
}
