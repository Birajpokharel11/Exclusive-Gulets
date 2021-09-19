/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import underLine from 'public/assets/images/smallBlueUnderline.svg';
import DestinationGallery from '@views/Home/components/Destinations/DestinationGallery';
import { Destinations } from '@views/Home/components';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: '6rem'
    },

    buttonStyle: {
      backgroundColor: '#2A398D',
      minWidth: '260px',
      minHeight: '52px',
      '&:hover': {
        backgroundColor: '#2A398D'
      }
    }
  })
);

export default function DestinationPhoto() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Destinations />
        <DestinationGallery />
      </Box>
    </>
  );
}
