import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Button } from '@material-ui/core';

import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 0
    },
    bgImage: {
      backgroundImage: `url('/assets/images/charterYatch.png')`,
      backgroundPosition: 'center',
      height: '23.75rem',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'blur(3px)'
    },
    bgContainer: {
      color: '#ffffff',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      padding: '20px',
      textAlign: 'center'
    },
    subtitle: {
      marginBottom: 40,
      [theme.breakpoints.up('sm')]: {
        marginBottom: 60
      }
    },
    buttonStyle: {
      backgroundColor: '#F5F0E4',
      color: '#2A398D'
    }
  })
);

export default function CharterYatch() {
  const classes = useStyles();
  return (
    <Box component="section" style={{ position: 'relative' }}>
      <Box className={classes.bgImage} />
      <Container maxWidth="sm" className={classes.bgContainer}>
        <Typography color="inherit" align="center" variant="h2" stripped>
          Charter a Luxury Yacht
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="subtitle1"
          className={classes.subtitle}
        >
          The most lavish super yacht to turn heads, or an exclusive gulet for a
          perfect family getaway.
        </Typography>
        <Grid container justifyContent="center">
          <Button color="secondary" variant="contained" size="large">
            View All Yachts
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}
