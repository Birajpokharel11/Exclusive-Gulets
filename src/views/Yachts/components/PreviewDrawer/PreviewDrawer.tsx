import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Grid,
  Button,
  Container,
  Divider
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Filter } from '../HeroSection/components';
import YachtsSlider from './components/YachtsSlider';
import { storeYacht } from '@store/siteCoordinator/siteCoordinator.actions';

const drawerWidth = '835px';
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '8px'
  },
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px',
    cursor: 'pointer',
    [theme.breakpoints.down(340)]: {
      width: '180px'
    }
  },
  tab: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    textTransform: 'uppercase',
    color: ' #FFFFFF',
    minWidth: '50px'
  },
  Menu: {
    backgroundColor: '#1b4077',

    color: '#FFFFFF'
  },
  logoBox: {
    padding: 0
  },
  tabBox: {
    [theme.breakpoints.down('lg')]: {
      padding: '0px,0px,0px,32px'
    }
  },
  SOfferBox: {
    width: '100%',
    position: 'relative',
    height: '80px',
    overflow: 'hidden',
    minHeight: '80px',
    background: '#F7F7F7'
  },
  Vector: {
    position: 'absolute',
    left: 0,
    top: 5,
    width: '107px'
  },
  drawer: {
    backgroundColor: '#091527'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#071529D9',
    [theme.breakpoints.down(785)]: {
      width: '80%'
    },
    [theme.breakpoints.down(700)]: {
      width: '100%'
    }
  },
  Span: {
    fontWeight: 400,
    fontSize: '26px'
  },
  button: { color: '#2A398D ', width: '200px', height: '52px' },
  Typography2: { fontWeight: 'normal' }
}));

const MobileData = [
  { Heading: 'yachtsType', yachtsType: 'Motor Yacht, 2009' },
  { Heading: 'Guests', yachtsType: '14' },
  { Heading: 'length', yachtsType: '42m' },
  { Heading: 'Cabin', yachtsType: '7' },
  { Heading: 'CruisingRegions', yachtsType: ' France, Italy' },
  { Heading: 'Crew', yachtsType: '7' }
];

export default function PreviewDrawer(props) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const { open, handleDrawerToggle, selectedYacht } = props;

  const DynamicMobileData = [];

  const storeYachtDetails = (selectedYacht) => {
    dispatch(storeYacht(selectedYacht));
  };
  console.log('Hellobro', selectedYacht.id);
  return (
    <>
      <div className={classes.toolbarMargin} />
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        {false && (
          <>
            <div className={classes.toolbarMargin} />
            <Box className={classes.SOfferBox}>
              <Grid item container justifyContent="center" lg={12}>
                <img
                  src="/assets/images/Vector.svg"
                  className={classes.Vector}
                  alt="vector"
                />
                <Box color="#2A398D">
                  <Typography color="inherit" variant="h1" align="center">
                    There wıll be a special offer text here!
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </>
        )}
        {false ? '' : <div className={classes.toolbarMargin} />}
        <Box display="flex" pt={1} justifyContent="space-between">
          <Box display="flex" alignItems="center" pl={3}>
            <Typography variant="h3" color="secondary">
              {selectedYacht.name ?? ''}
            </Typography>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
          <IconButton onClick={() => handleDrawerToggle()}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          pl={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src="/public/assets/yachts/image-38.png"
                style={{ width: '98%', height: '400px' }}
              />
              {/* <Filter /> */}
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item container spacing={2} md={6} xs={6}>
                  <Grid item>
                    <Typography variant="h6" gutterBottom color="secondary">
                      from
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                      {selectedYacht.charter_price ?? ''}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom color="secondary">
                      to
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                      {selectedYacht.charter_max_price ?? ''}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container md={6} xs={6} justifyContent="flex-end">
                  <Link href={`/yachts/${selectedYacht?.id}`}>
                    <Button className={classes.button} variant="contained">
                      View Details
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Divider />
        <Box pt={3} pl={3}>
          {/* <YachtsSlider imageList={selectedYacht.attachments} /> */}
          <Grid container spacing={2}>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                BUILDER
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                GUESTS
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                LENGTH
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                CABIN
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                CRUISING REGIONS
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h6" gutterBottom color="secondary">
                CREW
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                {selectedYacht.charter_price ?? ''}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          {/* <Grid container>
            {DynamicMobileData.map((item, i) => (
              <Grid item key={i} xs={6}>
                <Container
                  maxWidth="md"
                  style={{
                    display: 'flex',
                    width: '80%',
                    padding: '19px',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography color="secondary">{item.Heading}</Typography>
                  <Typography
                    variant="h5"
                    className={classes.Typography2}
                    color="secondary"
                  >
                    {item.yachtsType}
                  </Typography>
                </Container>
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Drawer>
    </>
  );
}
