import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NativeSelect, Grid, Typography, Button, Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      width: '100%',
      height: '1365px',
      minHeight: '1365px',
      background: ' #F5F0E4',
      mixBlendMode: 'normal',
      paddingTop: '100px'
    },
    textBox: { paddingLeft: '205px', paddingRight: '205px' },
    Button: {
      minWidth: '170px',
      minHeight: '22px',
      marginTop: '56px',
      background: ' #2A398D',
      '&:hover': {
        background: ' #2A398D'
      }
    }
  })
);

export default function Destinations() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  return (
    <Box className={classes.Box}>
      <Box className={classes.textBox}>
        <Typography variant="h1" align="center">
          Destinations
        </Typography>
        <Typography align="center">
          Perfect location and the perfect yacht for your ultimate charter
          experience. There is no better way than chartering a luxury gulet or
          yacht to see more of the world. With two third of the Earth covered in
          water, there is always a new exciting destination to explore and a
          different shoreline to discover.​
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" className={classes.Button}>
            <Typography
              align="left"
              style={{ textTransform: 'capitalize' }}
              variant="h5"
              color="secondary"
            >
              View All Destinations
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
