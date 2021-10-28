/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Grid, Box, Button } from '@material-ui/core';

import Typography from '@modules/components/Typography';
import DestinationGallery from './components/Gallery';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0 2rem'
    },
    buttonStyle: {
      backgroundColor: '#F5F0E4',
      color: '#2A398D',
      marginBottom: '4rem'
    },
    wheelImage: {
      position: 'absolute',
      top: 230,
      left: -20,
      transform: 'rotate(230deg)'
    }
  })
);

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  destinations: any[];
}

export default function Destinations({
  className,
  title,
  subtitle,
  destinations
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter();

  return (
    <Box
      component="section"
      className={clsx(classes.root, className)}
      style={{ position: 'relative' }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography color="textPrimary" align="center" variant="h2" stripped>
            {title}
          </Typography>

          <Typography
            align="center"
            variant="subtitle1"
            style={{ marginTop: '32px' }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: '3rem' }}
        >
          <Button
            fullWidth={matchesSM ? undefined : true}
            variant="contained"
            size="large"
            className={classes.buttonStyle}
            onClick={() =>
              router.push('/destinations', undefined, { shallow: true })
            }
          >
            View All Destinations​
          </Button>
        </Grid>
      </Container>
      <div className={classes.wheelImage}>
        <img
          src="/assets/images/Blog/blog-vector2.svg"
          className="img-responsive"
          alt="vector"
        />
      </div>

      <DestinationGallery destinationList={destinations} />
    </Box>
  );
}
