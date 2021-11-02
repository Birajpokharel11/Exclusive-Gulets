import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {
  Container,
  Grid,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Destination from './Destination';
import Filter from './Filter';
import Guests from './Guests';
import YachtsPreviewDialouge from './YachtsPreviewDialouge';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Button: {
      marginTop: '18px',
      width: '190px',
      height: '52px',
      background: '#F5F0E4',
      zIndex: 0,
      color: '#2A398D',
      '&:hover': { background: '#F5F0E4' },
      [theme.breakpoints.down(780)]: {
        width: '228px',
        position: 'absolute',
        top: '110%',
        left: '36%',
        right: '50%'
      }
    },
    Container: {
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '170px',

        [theme.breakpoints.down(800)]: { paddingLeft: '221px' }
      }
    },
    ButtonGrid: {
      position: 'relative',
      bottom: 10,
      [theme.breakpoints.down(1100)]: { left: '35%', right: '40%' }
    }
  })
);

export default function Destinations() {
  const classes = useStyles();
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const [personName, setPersonName] = React.useState(['Destinations:']);

  return (
    <Container maxWidth="false" className={classes.Container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item auto>
          <Destination />
        </Grid>
        <Grid item auto>
          <Filter />
        </Grid>
        <Grid item auto>
          <Guests />
        </Grid>
        <Grid item auto className={classes.ButtonGrid}>
          <Button
            variant="contained"
            className={classes.Button}
            data-cy="View-Yatchs"
          >
            View Yachts
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
