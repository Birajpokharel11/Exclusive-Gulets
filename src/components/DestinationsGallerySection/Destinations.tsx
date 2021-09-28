/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '4rem 0 2rem'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#2A398D'
      },
      marginBottom: '4rem'
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
  return (
    <Box component="section" className={clsx(classes.root, className)}>
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
          >
            View All Destinations​
          </Button>
        </Grid>
      </Container>

      <DestinationGallery destinationList={destinations} />
    </Box>
  );
}
