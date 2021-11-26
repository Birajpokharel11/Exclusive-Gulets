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
import {
  FormControl,
  InputLabel,
  Select,
  Slider,
  Typography
} from '@material-ui/core';
import { menuProps } from '@utils/utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    ButtonGroup: {
      border: ' 1px solid rgba(255, 255, 255, 0.5)',
      background: 'rgba(12, 22, 37, 0.6)',
      borderRadius: '4px'
    },
    formControl: {
      width: '190px',
      background: 'rgba(12, 22, 37, 0.6)',
      [theme.breakpoints.down('sm')]: {
        width: '114px'
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
      padding: '14.5px 14px',
      background: 'none'
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
    Paper: {
      padding: '43px 20px 20px 20px',
      zIndex: 2,
      width: '440px'
    }
  })
);

const ITEM_HEIGHT = 179;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  ...menuProps,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '500px'
    }
  }
};

export default function Filter(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel style={{ color: 'white' }}>Guests</InputLabel>
      <Select
        style={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
          height: '52px'
        }}
        IconComponent={() => (
          <ExpandMoreIcon style={{ color: 'white', cursor: 'pointer' }} />
        )}
        variant="filled"
        MenuProps={MenuProps}
        fullWidth
        ref={anchorRef}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper elevation={0} className={classes.Paper}>
            <RangeSlider {...props} />
          </Paper>
        </ClickAwayListener>
      </Select>
    </FormControl>
  );
}
