import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Search from './Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      width: '100%',
      height: '132px',
      minHeight: '132px',
      background: '#091527'
    },
    icon: {}
  })
);

export default function AdvancedFilterSection() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  return (
    <Box className={classes.Box}>
      <Search />
    </Box>
  );
}
