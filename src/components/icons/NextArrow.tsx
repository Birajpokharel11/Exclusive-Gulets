import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '45%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    right: 0
  },
  icon: {
    fontSize: '1rem',
    color: '#2a398d'
  }
}));

export default function NextArrow(props) {
  const classes = useStyles();

  return (
    <IconButton onClick={props.onClick} className={classes.root}>
      <ArrowForwardIosIcon className={classes.icon} />
    </IconButton>
  );
}
