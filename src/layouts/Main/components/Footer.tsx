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
  let currentYear = new Date().getFullYear();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Hidden xsDown>
            <Grid item md={7} style={{ marginTop: '20px' }}>
              <Typography className={classes.ListItems}>
                Yacht Cloud © {currentYear}. All Rights Reserved.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-end"
            md={5}
            spacing={1}
          >
            <Grid item>
              <Typography className={classes.ListItems}>
                <strong>Yacht Cloud LLC</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.ListItems}>
                6200 Stoneridge Mall Road, Pleasanton, 94588, California
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.ListItems}
                style={{ color: '#337ab7' }}
              >
                info@yachtcloud.net
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.ListItems}
                style={{ color: '#337ab7' }}
              >
                Privacy & Terms
              </Typography>
            </Grid>
          </Grid>
          <Hidden smUp>
            <Grid item container xs={12} style={{ marginTop: '20px' }}>
              <Typography className={classes.ListItems}>
                Yacht Cloud © {currentYear}. All Rights Reserved.
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
