import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function PrevArrow(props) {
  return (
    <IconButton onClick={props.onClick}>
      <ArrowBackIosIcon fontSize="large" />
    </IconButton>
  );
}
