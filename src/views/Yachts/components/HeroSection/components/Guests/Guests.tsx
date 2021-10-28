import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import InputBase from '@material-ui/core/InputBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RangeSlider from './components/RangeSlider';
import { Slider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    ButtonGroup: {
      border: ' 1px solid rgba(255, 255, 255, 0.5)',
      background: 'rgba(12, 22, 37, 0.6)',
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
    },
    root: {
      width: 300
    },
    Paper: { padding: '43px 20px 20px 20px', zIndex: 2, width: '440px' }
  })
);

export default function Filter() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const anchorRef = React.useRef<HTMLDivElement>(null);

  ////////////////////////////////////////////////////////////////Range slider
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  ////////////////////////////////////////////////////////////////////////////
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
      <FormLabel className={classes.label}>Guests</FormLabel>
      <div ref={anchorRef} className={classes.ButtonGroup}>
        <Grid container justifyContent="center">
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
        </Grid>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        style={{ zIndex: 2 }}
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
              <Paper className={classes.Paper}>
                {' '}
                <RangeSlider />
              </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </>
  );
}
