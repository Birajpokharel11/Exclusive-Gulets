import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Button,
  Box,
  Hidden,
  InputLabel,
  MenuItem,
  Checkbox,
  ListItemText,
  useMediaQuery
} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Destination from './Destination';
import Filter from './Filter';
import Guests from './Guests';
import DestinationDialouge from './DestinationDialouge';

import container from './Search.container';

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

function SearchFilter(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { onFilterYachtsStart } = props;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const data = {
      minGuest: value[0],
      maxGuest: value[1]
    };
    onFilterYachtsStart(data);
  };

  return (
    <>
      <Hidden mdDown>
        <Container maxWidth={false} className={classes.Container}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Destination />
            </Grid>
            <Grid item>
              <Filter />
            </Grid>
            <Grid item>
              <Guests value={value} handleChange={handleChange} />
            </Grid>
            <Grid item className={classes.ButtonGrid}>
              <Button
                variant="contained"
                className={classes.Button}
                data-cy="View-Yatchs"
                onClick={handleSubmit}
              >
                View Yachts
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden smUp>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="split button"
        >
          <Button onClick={handleClickOpen}>Destinations</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleClickOpen}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <DestinationDialouge
          open={open}
          handleClose={handleClose}
          value={value}
          handleChange={handleChange}
        />
      </Hidden>
    </>
  );
}

export default container(SearchFilter);
