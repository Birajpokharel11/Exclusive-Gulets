import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    borderRadius: 999999
  }
}));

export default function NextArrow(props) {
  const classes = useStyles();

  return (
    <IconButton onClick={props.onClick} className={classes.root}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
}
