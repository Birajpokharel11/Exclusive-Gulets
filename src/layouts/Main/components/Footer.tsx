import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton } from '@material-ui/core';
import Searchbar from './Searchbar';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#091527',
    width: '100%',
    padding: '80px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 100px'
    }
  },
  Grid: {
    paddingTop: '12%',
    paddingLeft: '99px',
    paddingRight: '14%',
    [theme.breakpoints.down('md')]: {
      paddingTop: '12%',
      paddingLeft: '24px',
      paddingRight: '14%'
    }
  },
  YatchStyle: {
    marginBottom: '13%',
    [theme.breakpoints.down('md')]: {
      marginTop: '69px'
    }
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: '10.4846px',
    color: '#545FDB'
  },
  ListItems: {
    color: 'white',
    display: 'flex',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '19px'
  },
  ListItems2: {
    color: 'white',
    display: 'flex',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '6%'
  },
  ListitemsMargin: {
    marginTop: '4%'
  },
  TypographyHeading: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    color: 'white',
    lineHeight: '24px'
  },
  TypographyBody: {
    color: 'white'
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(800));

  return (
    <Box className={classes.root}>
      <Container>
        <Box>
          <Grid
            container
            className={classes.Grid}
            justifyContent="space-between"
          >
            <Grid item md={4} style={{ color: 'white', fontFamily: 'lato' }}>
              <Typography className={classes.TypographyHeading}>
                EXCLUSIVE GULETS
              </Typography>
              <Typography className={classes.ListItems2}>
                Level 1. Devonshire House
                <br /> One Mayfair Place <br />
                Mayfair, London ,<br />
                W1J8AJ, ENGLAND
                <br />
                <br />
                info@exclusivegulet.com <br />
                t. +44 208 144 58 34
              </Typography>
            </Grid>
            <Grid item md={4}>
              <List className={classes.ListItems}>
                <div>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      Browse
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      For Sale
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      {' '}
                      For Charter
                    </Typography>
                  </ListItem>
                </div>
                <div>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      {' '}
                      About
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      Destinations
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      {' '}
                      Dinning
                    </Typography>
                  </ListItem>
                </div>
                <div>
                  <ListItem>
                    <Typography className={classes.ListItems}> Blog</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      SignIn
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className={classes.ListItems}>
                      {' '}
                      Sign Up
                    </Typography>
                  </ListItem>
                </div>
              </List>
            </Grid>
            <Grid item md={4}>
              <div className={classes.YatchStyle}>
                <Typography className={classes.TypographyHeading}>
                  Yacht-Style Newsletter
                </Typography>
                <Typography
                  className={clsx(classes.ListItems, classes.ListitemsMargin)}
                >
                  If you like yachts you need this newsletter in your life.
                </Typography>
              </div>
              <Searchbar />
              {!matches && (
                <div
                  style={{
                    color: 'white',
                    marginTop: '16%',
                    marginBottom: '11%'
                  }}
                >
                  <Typography className={classes.TypographyHeading}>
                    Contact Us
                  </Typography>
                  <div>
                    <IconButton color="inherit" data-cy="Footer-facebook">
                      <img src="/assets/images/Facebook.svg" alt="facebook" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Instagram">
                      <img src="/assets/images/Instagram.svg" alt="Instagram" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-LinkedIn">
                      <img src="/assets/images/LinkedIn.svg" alt="LinkedIn" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Twitter">
                      <img src="/assets/images/Twitter.svg" alt="Twitter" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Youtube">
                      <img src="/assets/images/Youtube.svg" alt="Youtube" />
                    </IconButton>
                  </div>
                </div>
              )}
            </Grid>
            <Grid>
              {' '}
              {matches && (
                <div
                  style={{
                    color: 'white',
                    marginTop: '16%',
                    marginBottom: '11%'
                  }}
                >
                  <Typography className={classes.TypographyHeading}>
                    Contact Us
                  </Typography>
                  <div>
                    <IconButton color="inherit" data-cy="Footer-facebook">
                      <img src="/assets/images/Facebook.svg" alt="facebook" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Instagram">
                      <img src="/assets/images/Instagram.svg" alt="Instagram" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-LinkedIn">
                      <img src="/assets/images/LinkedIn.svg" alt="LinkedIn" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Twitter">
                      <img src="/assets/images/Twitter.svg" alt="Twitter" />
                    </IconButton>
                    <IconButton color="inherit" data-cy="Footer-Youtube">
                      <img src="/assets/images/Youtube.svg" alt="Youtube" />
                    </IconButton>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              color: 'white',
              width: '100%'
            }}
          >
            <Grid item md={7}>
              <Typography className={classes.ListItems}>
                Copyright 2019 - EXCLUSIVE GULETS
              </Typography>
            </Grid>
            <Grid item md={5}>
              <div
                color="inherit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5rem',
                  marginLeft: '7%'
                }}
              >
                <Typography className={classes.ListItems}>Privacy</Typography>
                <Typography className={classes.ListItems}>
                  Terms and Conditions
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
