import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    borderRadius: 999999
  }
}));

export default function PrevArrow(props) {
  const classes = useStyles();

  return (
    <IconButton onClick={props.onClick} className={classes.root}>
      <ArrowBackIosIcon fontSize="small" />
    </IconButton>
  );
}
