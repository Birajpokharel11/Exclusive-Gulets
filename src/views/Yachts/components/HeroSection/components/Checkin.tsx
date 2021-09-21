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
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { red } from '@material-ui/core/colors';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import Dialouge from './Dialouge';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      background: 'transparent',
      fontSize: 18,
      padding: '10px 26px 10px 12px'
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '200px',
      [theme.breakpoints.down('md')]: {
        width: '150px'
      }
    },
    Button: { '&:hover': { baackground: 'red' } },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    }
  })
);

export default function Checkin() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [week, setWeek] = React.useState(false);
  const [Cweek, setCweek] = React.useState(false);
  const [month, setMonth] = React.useState(false);
  const [w, setw] = React.useState(false);
  const [s, sets] = React.useState<number | string>('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    sets(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setw(true);
  };

  const handleClose = () => {
    setw(false);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          color="primary"
          classes={{
            icon: classes.icon
          }}
          IconComponent={KeyboardArrowDownIcon}
          id="demo-customized-select-native"
          value={age}
          onOpen={() => setw(!w)}
          input={<BootstrapInput />}
        ></Select>
        <Dialouge w={w} setw={setw} />
      </FormControl>
    </div>
  );
}
