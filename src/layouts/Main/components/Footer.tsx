import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Hidden
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
    [theme.breakpoints.down('sm')]: {
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
  },
  privacyContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '68px'
    }
  },
  GridAbout: {
    [theme.breakpoints.down(800)]: {
      marginRight: '50px'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(800));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item sm={4} xs={12}>
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
          <Grid item sm={4} xs={12} className={classes.GridAbout}>
            <List className={classes.ListItems}>
              <div>
                <ListItem>
                  <Typography className={classes.ListItems}>Browse</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    For Sale
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    For Charter
                  </Typography>
                </ListItem>
              </div>
              <div>
                <ListItem>
                  <Typography className={classes.ListItems}> About</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>
                    Destinations
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>Dinning</Typography>
                </ListItem>
              </div>
              <div>
                <ListItem>
                  <Typography className={classes.ListItems}> Blog</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>SignIn</Typography>
                </ListItem>
                <ListItem>
                  <Typography className={classes.ListItems}>Sign Up</Typography>
                </ListItem>
              </div>
            </List>
          </Grid>
          <Grid item container md={4} sm={12}>
            <Grid item sm={7} md={12} xs={12}>
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
            </Grid>
            <Grid
              item
              container
              lg={12}
              md={12}
              sm={5}
              xs={12}
              justifyContent={matchesXS ? 'center' : undefined}
              alignItems={matchesXS ? 'center' : undefined}
            >
              <div
                style={{
                  color: 'white',
                  marginTop: '16%',
                  marginBottom: '11%'
                }}
              >
                <Typography
                  className={classes.TypographyHeading}
                  align={matchesXS ? 'center' : undefined}
                >
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
                    <img src="/assets/images/Linkedin.svg" alt="LinkedIn" />
                  </IconButton>
                  <IconButton color="inherit" data-cy="Footer-Twitter">
                    <img src="/assets/images/Twitter.svg" alt="Twitter" />
                  </IconButton>
                  <IconButton color="inherit" data-cy="Footer-Youtube">
                    <img src="/assets/images/Youtube.svg" alt="Youtube" />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* <Grid>
            {matches && (
              <div
                style={{
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
                    <img src="/assets/images/Linkedin.svg" alt="LinkedIn" />
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
          </Grid> */}
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.privacyContainer}
        >
          <Hidden xsDown>
            <Grid item md={7} style={{ marginTop: '20px' }}>
              <Typography className={classes.ListItems}>
                Copyright 2019 - EXCLUSIVE GULETS
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
