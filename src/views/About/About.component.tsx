import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';
import container from './About.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    },
    Box: {
      margin: '0% 21%',
      [theme.breakpoints.down('lg')]: {
        margin: '0% 12%'
      },
      [theme.breakpoints.down('md')]: {
        margin: '0% 8%'
      }
    },
    Vctors: {
      [theme.breakpoints.down(700)]: {
        display: 'none'
      }
    }
  })
);

function About({ About, loading }) {
  const classes = useStyles();
  const slider = [];

  console.log('About', About);
  return (
    <>
      <BannerSection withSocial={true} />
      <Box component="section" className={classes.sectionGem}></Box>

      {/* <FooterSlider /> */}
    </>
  );
}

export default container(About);
