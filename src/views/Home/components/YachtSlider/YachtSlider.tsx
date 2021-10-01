import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';

import Typography from '@modules/components/Typography';

import CustomSlider from './components/CustomSlider';
import { slider } from '@mocks/_homeSliderMock';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#F5F0E4',
      position: 'relative',
      padding: '60px 0',
      [theme.breakpoints.up('sm')]: {
        padding: '80px 0 100px'
      }
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    gridContainer: {
      paddingTop: '3rem',
      marginBottom: '1rem',
      [theme.breakpoints.up('md')]: {
        marginBottom: '60px'
      }
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    connectorLine: {
      borderTopWidth: '999px'
    },
    stepIconRoot: {
      color: 'pink',
      '&.MuiStepIcon-active': {
        color: 'red'
      },
      '&.MuiStepIcon-completed': {
        color: 'green'
      }
    }
  })
);

export default function YatchSlider({ title, subtitle, contentData }) {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <Box textAlign="center" className={classes.gridContainer}>
        <Typography color="textPrimary" variant="h2" stripped>
          {title}
        </Typography>

        <Typography color="textPrimary" variant="subtitle1">
          {subtitle}
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <CustomSlider sliderData={contentData} />
      </Container>
    </Box>
  );
}
