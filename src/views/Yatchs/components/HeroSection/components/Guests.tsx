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

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'none',
      color: 'white',
      height: '30px',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px'
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '200px',
      [theme.breakpoints.down('md')]: {
        width: '164px'
      }
    },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    }
  })
);

export default function Guests() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
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
          Guests
        </option>
        <option style={{ background: 'black' }} value={20}>
          Twenty
        </option>
        <option style={{ background: 'black' }} value={30}>
          Thirty
        </option>
      </NativeSelect>
    </FormControl>
  );
}
