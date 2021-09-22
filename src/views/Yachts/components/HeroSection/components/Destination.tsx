import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {
  Select,
  Grid,
  Typography,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Filter from './Filter';
import Guests from './Guests';
import YachtsPreviewDialouge from './YachtsPreviewDialouge';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'none',
      color: 'white',
      border: '1px solid #ced4da',
      background: 'rgba(12, 22, 37, 0.6)',
      height: '30px',
      fontSize: 16,
      padding: '10px 26px 10px 12px'
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '167px'
      }
    },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    },
    Button: {
      width: '190px',
      height: '52px',
      background: '#F5F0E4',
      color: '#2A398D',
      '&:hover': { background: '#F5F0E4' },
      [theme.breakpoints.down(780)]: {
        width: '228px',
        position: 'absolute',
        top: '110%',
        left: '36%',
        right: '50%'
      }
    }
  })
);
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];
export default function Destinations() {
  const classes = useStyles();
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const [personName, setPersonName] = React.useState(['Destinations:']);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item md style={{ paddingBottom: '2%' }}>
          <FormControl className={classes.margin}>
            <Select
              id="demo-mutiple-checkbox"
              multiple
              classes={{
                icon: classes.icon
              }}
              IconComponent={KeyboardArrowDownIcon}
              value={personName}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    color="primary"
                    checked={personName.indexOf(name) > -1}
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <div style={{ flexGrow: 1 }} />
        <Grid item md>
          <Filter />
        </Grid>
        <div style={{ flexGrow: 1 }} />

        <Grid item md>
          <Guests />
        </Grid>
        <div style={{ flexGrow: 1 }} />

        <Button
          variant="contained"
          className={classes.Button}
          onClick={handleDrawerOpen}
          data-cy="View-Yatchs"
        >
          View Yatchs
        </Button>
      </Grid>
      <YachtsPreviewDialouge open={open} setOpen={setOpen} />
    </div>
  );
}
