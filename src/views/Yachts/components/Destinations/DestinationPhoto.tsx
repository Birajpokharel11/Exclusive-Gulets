/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Destinations from '@views/Home/components/Destinations';

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
      </Box>
    </>
  );
}
