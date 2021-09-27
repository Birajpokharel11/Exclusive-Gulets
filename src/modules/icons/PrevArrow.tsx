import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '35%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    left: 0,
    boxShadow: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
  },
  icon: {
    fontSize: '1rem',
    color: '#2a398d'
  }
}));

export default function PrevArrow(props) {
  const classes = useStyles();

  return (
    <IconButton onClick={props.onClick} className={classes.root}>
      <ArrowBackIosIcon className={classes.icon} />
    </IconButton>
  );
}
