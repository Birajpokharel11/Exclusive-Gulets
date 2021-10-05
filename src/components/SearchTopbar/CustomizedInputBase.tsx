import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '90%',
      border: '1px solid white',
      background: 'transparent',
      height: '70px'
    },
    input: {
      marginLeft: theme.spacing(1),
      color: 'white',
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Box
      style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}
    >
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <SearchIcon style={{ height: '25px', width: '25px' }} />
        </IconButton>
        <InputBase className={classes.input} placeholder="Type 3 Letters" />
      </Paper>
    </Box>
  );
}
