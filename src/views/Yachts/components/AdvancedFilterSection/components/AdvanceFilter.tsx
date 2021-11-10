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
import AdvancedFilterSection from './components/AdvanceFiltersSection';
import Filters from './Filters';

import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import MobileFilter from './Sort/components/MobileFilter';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginRight: theme.spacing(2)
    },
    Filters: {
      color: 'white',
      width: '214px',
      height: '53px',
      [theme.breakpoints.down('xs')]: { width: '200px' },
      [theme.breakpoints.down(325)]: { width: '140px' },

      marginRight: theme.spacing(2),
      '&.MuiButton-outlined': {
        border: '1px solid rgba(255, 255, 255, 0.5)'
      }
    },
    MobileFilters: {
      '&.MuiButton-outlined': {
        border: 'none'
      }
    },
    mobilesearch: {
      width: '400px'
    },
    FilterTypo: {
      paddingLeft: theme.spacing(2),
      textTransform: 'capitalize'
    },
    Paper: {
      padding: '32px 24px 16px 16px',
      zIndex: 2,
      width: '432px',
      minHeight: '432px'
    }
  })
);
interface Props {
  mobilesearch?: boolean;
}
export default function MenuListComposition({ mobilesearch }: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [mobileFilter, setMobileFilter] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setMobileFilter((prev) => !prev);
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
      <Button
        className={clsx(classes.Filters, {
          [classes.MobileFilters]: matches,
          [classes.mobilesearch]: mobilesearch
        })}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <img src="/assets/images/AFilter.svg" />
        <Typography color="inherit" variant="h5" className={classes.FilterTypo}>
          {!matches ? 'Advanced Filters' : 'Filters'}
        </Typography>
      </Button>
      {!matches ? (
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
                <Paper square className={classes.Paper}>
                  <Filters />
                </Paper>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      ) : (
        <MobileFilter
          prevOpen={mobileFilter}
          setMobileFilter={setMobileFilter}
        />
      )}
    </>
  );
}
