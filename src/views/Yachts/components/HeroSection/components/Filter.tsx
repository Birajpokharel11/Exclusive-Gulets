import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  LocalizationProvider,
  StaticDateRangePicker,
  DateRangeDelimiter,
  DateRange
} from '@material-ui/pickers';
import MomentUtils from '@material-ui/pickers/adapter/moment';

const useStyles = makeStyles((theme) =>
  createStyles({
    ButtonGroup: {
      border: ' 1px solid rgba(255, 255, 255, 0.5)',
      width: '450px',
      background: 'rgba(12, 22, 37, 0.6)',
      [theme.breakpoints.down('md')]: {
        width: '350px'
      },
      maxHeight: '50px',
      borderRadius: '4px',
      [theme.breakpoints.down(530)]: {
        fontSize: '14px'
      }
    },
    Button: { '&:hover': { baackground: 'red' } },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    },
    inputRoot: {
      flex: 1
    },
    input: {
      padding: '14.5px 14px'
    },
    label: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '14px',
      color: '#FFFFFF'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  })
);

export default function Filter() {
  const classes = useStyles();

  const [calender, setCalender] = React.useState('calendar');
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <FormLabel className={classes.label}>
        {calender === 'calendar' ? 'Checkin' : 'Flexible Dates'}
      </FormLabel>
      <div ref={anchorRef} className={classes.ButtonGroup}>
        <Grid container justifyContent="center">
          {calender === 'calendar' ? (
            <>
              <Grid item xs style={{ display: 'flex' }}>
                <InputBase
                  classes={{
                    input: classes.input
                  }}
                  placeholder="Check in"
                />
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: open
                  })}
                  onClick={handleToggle}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                style={{
                  backgroundColor: 'white',
                  marginTop: '5px',
                  marginBottom: '5px',
                  minHeight: '40px'
                }}
              />
              <Grid item xs style={{ display: 'flex' }}>
                <InputBase
                  classes={{
                    input: classes.input
                  }}
                  placeholder="Check in"
                />
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: open
                  })}
                  onClick={handleToggle}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </>
          ) : (
            <Grid item xs style={{ display: 'flex' }}>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.input
                }}
                placeholder="Check in"
              />
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: open
                })}
                onClick={handleToggle}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Paper>
                <Box
                  p={2}
                  display="flex"
                  justifyContent="center"
                  style={{ gap: '1rem' }}
                >
                  <Button
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => setCalender('calendar')}
                  >
                    Calendar
                  </Button>
                  <Button
                    onClick={() => setCalender('flexible')}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    I{`'`}m Fexible
                  </Button>
                </Box>
                {calender === 'flexible' ? (
                  <Box>
                    <Box p={2} display="flex" justifyContent="center">
                      <Typography>
                        Stay For<span> a week</span>
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <LocalizationProvider dateAdapter={MomentUtils}>
                    <StaticDateRangePicker
                      displayStaticWrapperAs="desktop"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <DateRangeDelimiter> to </DateRangeDelimiter>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                )}
              </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </>
  );
}
