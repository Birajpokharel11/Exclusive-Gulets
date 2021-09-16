import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function NextArrow(props) {
  return (
    <IconButton onClick={props.onClick}>
      <ArrowForwardIosIcon fontSize="large" />
    </IconButton>
  );
}
