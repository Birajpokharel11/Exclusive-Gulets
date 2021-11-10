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
  setOpen?: boolean;
  oppen?: boolean;
}
export default function FilterMobile({ setOpen, open } = Props) {
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [back, setBack] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [fexible, setFexible] = React.useState(false);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton>
            <CloseIcon className={classes.Close} />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h3" style={{ marginLeft: '35px' }}>
            Select check-in date
          </Typography>
        </Box>

        <Box
          style={{ paddingTop: '24px' }}
          display="flex"
          justifyContent="center"
        >
          <Button
            className={classes.Button}
            variant="contained"
            color="primary"
            size="large"
          >
            Calendar
          </Button>
          <Button
            onClick={() => setFexible((prev) => !prev)}
            variant="contained"
            color="secondary"
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

        <Paper
          style={{
            position: 'relative',
            top: '19vh',
            height: '108px',
            width: '100%',
            background: '#F5F0E4'
          }}
        >
          <Box
            style={{ width: '100%', gap: '1rem', paddingTop: '32px' }}
            display="flex"
            justifyContent="center"
          >
            <Button
              onClick={() => setBack((prev) => !prev)}
              className={classes.Button1}
              variant="outlined"
            >
              Back
            </Button>

            <Button
              onClick={() => setNext((prev) => !prev)}
              className={classes.Button2}
              variant="contained"
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Dialog>
    </div>
  );
}
