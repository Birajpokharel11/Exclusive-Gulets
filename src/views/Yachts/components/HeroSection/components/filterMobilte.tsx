import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Paper, TextField } from '@material-ui/core';
import MomentUtils from '@material-ui/pickers/adapter/moment';

import {
  LocalizationProvider,
  StaticDateRangePicker,
  DateRangeDelimiter,
  DateRange,
  StaticDatePicker
} from '@material-ui/pickers';
import MobileFexible from './mobileFexible';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    Close: {
      color: 'black',
      paddingTop: '70px'
    },
    Button1: {
      border: '1px solid #2A398D',
      color: '#2A398D',
      background: '#F5F0E4',
      width: '125px',
      height: '52px'
    },
    Button2: {
      color: 'white',
      backgroundColor: '#F5F0E4',
      width: '125px',
      height: '52px'
    },
    Calender: {
      background: '#F5F0E4',
      color: 'black'
    },
    Calenderbefore: { '&:hover': { background: '#2A398D', color: 'white' } },
    fexiblebefore: { '&:hover': { background: '#2A398D', color: 'white' } },
    Fexible: {
      background: '#2A398D',
      color: 'white'
    },
    Next: {
      background: '#2A398D',
      color: 'white',
      width: '200px',
      height: '52px',
      '&:hover': { background: '#2A398D', color: 'white' }
    }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface Props {
  setOpen?: any | boolean;
  open?: any | boolean;
}
export default function FilterMobile({ setOpen, open }: Props) {
  const classes = useStyles();

  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [fexible, setFexible] = React.useState(false);

  return (
    <div style={{ height: '60vh', overflow: 'scroll' }}>
      <Box
        style={{ paddingTop: '24px' }}
        display="flex"
        justifyContent="center"
      >
        <Button
          onClick={() => setFexible(false)}
          variant="contained"
          color="primary"
          size="large"
          className={clsx(classes.Calenderbefore, {
            [classes.Calender]: fexible
          })}
        >
          Calendar
        </Button>
        <Button
          onClick={() => setFexible(true)}
          variant="contained"
          color="secondary"
          className={clsx(classes.fexiblebefore, {
            [classes.Fexible]: fexible
          })}
          size="large"
        >
          I{`'`}m Fexible
        </Button>
      </Box>
      {!fexible ? (
        <>
          <LocalizationProvider dateAdapter={MomentUtils}>
            <StaticDatePicker
              orientation="landscape"
              openTo="date"
              value={value}
              // @ts-expect-error Waiting for making all inner components generics
              shouldDisableDate={false}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(props) => <TextField {...props} />}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={MomentUtils}>
            <StaticDatePicker
              orientation="landscape"
              openTo="date"
              value={value}
              // @ts-expect-error Waiting for making all inner components generics
              shouldDisableDate={false}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(props) => <TextField {...props} />}
            />
          </LocalizationProvider>
        </>
      ) : (
        <Box style={{ overflow: 'scroll', width: '100%' }}>
          <MobileFexible />
        </Box>
      )}
    </div>
  );
}
