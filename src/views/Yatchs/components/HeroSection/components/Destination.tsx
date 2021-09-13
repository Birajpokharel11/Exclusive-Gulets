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
import { NativeSelect, Grid, Typography, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { red } from '@material-ui/core/colors';
import Filter from './Filter';
import Guests from './Guests';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'none',
      color: 'white',
      border: '1px solid #ced4da',
      height: '30px',
      fontSize: 16,
      padding: '10px 26px 10px 12px'
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '400px'
    },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    }
  })
);

export default function Destinations() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <Grid container>
        <Grid item md>
          <FormControl className={classes.margin}>
            <NativeSelect
              color="primary"
              classes={{
                icon: classes.icon
              }}
              IconComponent={KeyboardArrowDownIcon}
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option style={{ background: 'black' }} value={10}>
                Destinations
              </option>
              <option style={{ background: 'black' }} value={20}>
                Twenty
              </option>
              <option style={{ background: 'black' }} value={30}>
                Thirty
              </option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item md>
          <Filter />
        </Grid>
        <Grid item md>
          <Guests />
        </Grid>

        <Button
          style={{
            width: '190px',
            height: '52px',
            background: '#F5F0E4',
            marginRight: '20% '
          }}
        >
          <Typography variant="subtitle1">View Yatchs</Typography>
        </Button>
      </Grid>
    </div>
  );
}
