import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Grid,
  Button,
  Container,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import Filter from './Filter';
import YachtsSlider from './YachtsSlider';
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
  drawer: {
    backgroundColor: '#091527'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#071529D9',
    paddingRight: '2%',
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
  button: { color: '#2A398D ', width: '200px', height: '52px',  },
  Typography2:{fontWeight:'normal'}
}));
const MobileData = [
  { Heading: 'yachtsType', yachtsType: 'Motor Yacht, 2009' },
  { Heading: 'Guests', yachtsType: '14' },
  { Heading: 'length', yachtsType: '42m' },
  { Heading: 'Cabin', yachtsType: '7' },
  { Heading: 'CruisingRegions', yachtsType: ' France, Italy' },
  { Heading: 'Crew', yachtsType: '7' }
];
export default function YachtsPreviewDialouge(props) {
  const classes = useStyles();
  const { open, setOpen } = props;
  return (
    <>
      <div className={classes.toolbarMargin} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbarMargin} />
        <Box display="flex" pt={1} justifyContent="space-between">
          <Box display="flex" alignItems="center" pl={3}>
            <Typography variant="h3" color="secondary">
              ARESTEAS
            </Typography>
            <IconButton>
              <FavoriteBorderOutlined />
            </IconButton>
          </Box>
          <IconButton onClick={() => setOpen(!open)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          pl={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Filter />
          <Typography variant="subtitle1" color="secondary">
            from <span className={classes.Span}>135.000</span> to
            <span className={classes.Span}>155.000</span>
          </Typography>
        </Box>
        <br />
        <Box pl={3}>
          <YachtsSlider />
        </Box>
        <Box pt={1} pb={6}>
          <Grid container justifyContent="center">
            <Button className={classes.button} variant="contained">
              View Details
            </Button>
          </Grid>
        </Box>
        <Box>
          <Grid  container  >
            {MobileData.map((item, i) => (
              <Grid item key={i} xs={6}>
                <Container maxWidth="md"style={{display:'flex', width:'80%', padding:'19px',justifyContent:'space-between'}}>
                 <Typography color="secondary">{item.Heading}</Typography>
                 <Typography variant="h5" className={classes.Typography2} color="secondary">{item.yachtsType}</Typography>
                </Container>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}
