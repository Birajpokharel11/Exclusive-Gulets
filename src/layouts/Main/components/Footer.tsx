import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Typography, Box, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#091527',
    width: '100%',
    padding: '80px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 100px'
    }
  },
  ListItems: {
    color: 'white',
    display: 'flex',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '19px'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Hidden xsDown>
            <Grid item md={7} style={{ marginTop: '20px' }}>
              <Typography className={classes.ListItems}>
                Copyright 2019 - YATCH CLOUD
              </Typography>
            </Grid>
          </Hidden>
          <Grid item container justifyContent="space-between" md={5}>
            <Grid item>
              <Typography className={classes.ListItems}>Privacy</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.ListItems}>
                Terms and Conditions
              </Typography>
            </Grid>
          </Grid>
          <Hidden smUp>
            <Grid item container xs={12} style={{ marginTop: '20px' }}>
              <Typography className={classes.ListItems}>
                Copyright 2019 - EXCLUSIVE GULETS
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
