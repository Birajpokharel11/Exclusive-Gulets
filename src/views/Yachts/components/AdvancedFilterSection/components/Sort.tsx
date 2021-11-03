import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FlashOnTwoTone } from '@material-ui/icons';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      minWidth: '200px',
      height: '168px'
    },
    MobileSort: {
      '&.MuiButton-outlined': {
        border: 'none'
      }
    },
    Sort: {
      maxWidth: '121px',
      height: '53px',
      color: 'white',
      '&.MuiButton-outlined': {
        border: '1px solid rgba(255, 255, 255, 0.5)',
        [theme.breakpoints.down('xs')]: { border: 'none' }
      }
    },
    FilterTypo: {
      paddingLeft: theme.spacing(2),
      textTransform: 'capitalize'
    },
    MenuItem: {
      fontWeight: 300,
      fontStyle: 'normal',
      fontSize: '18px',
      color: '#091527',
      lineHeight: '21px'
    },
    Selected1: {
      fontWeight: 500
    }
  })
);

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [price_LowToHigh, setprice_LowToHigh] = React.useState(false);
  const [price_HighToLow, setprice_HighToLow] = React.useState(false);
  const [Length_LowToHigh, setLength_LowToHigh] = React.useState(false);
  const [Length_HighToLow, setLength_HighToLow] = React.useState(false);
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
  const handlePrice1 = (event: React.MouseEvent<EventTarget>) => {
    setprice_LowToHigh((prev) => !prev);
  };
  const handlePrice2 = (event: React.MouseEvent<EventTarget>) => {
    setprice_HighToLow((prev) => !prev);
  };
  const handleLength1 = (event: React.MouseEvent<EventTarget>) => {
    setLength_LowToHigh((prev) => !prev);
  };
  const handleLength2 = (event: React.MouseEvent<EventTarget>) => {
    setLength_HighToLow((prev) => !prev);
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

  //////////////////////////// Mobile view view
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
      <Button
        className={clsx(classes.Sort, { [classes.MobileSort]: matches })}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <img src="/assets/images/Sort.svg" />
        <Typography color="inherit" variant="h5" className={classes.FilterTypo}>
          Sort
        </Typography>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 1 }}
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
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  style={{ paddingTop: '16px' }}
                >
                  <MenuItem
                    className={clsx(classes.MenuItem, {
                      [classes.Selected1]: price_LowToHigh
                    })}
                    onClick={handlePrice1}
                  >
                    Price - Low to High
                  </MenuItem>
                  <MenuItem
                    className={clsx(classes.MenuItem, {
                      [classes.Selected1]: price_HighToLow
                    })}
                    onClick={handlePrice2}
                  >
                    Price - High to Low
                  </MenuItem>
                  <MenuItem
                    className={clsx(classes.MenuItem, {
                      [classes.Selected1]: Length_LowToHigh
                    })}
                    onClick={handleLength1}
                  >
                    Lenght - Low to High
                  </MenuItem>
                  <MenuItem
                    className={clsx(classes.MenuItem, {
                      [classes.Selected1]: Length_HighToLow
                    })}
                    onClick={handleLength2}
                  >
                    Lenght - High to Low
                  </MenuItem>
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </>
  );
}
