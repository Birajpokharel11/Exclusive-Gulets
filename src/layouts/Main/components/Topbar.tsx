import React, { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px',
    cursor: 'pointer',
    [theme.breakpoints.down(340)]: {
      width: '180px'
    }
  },
  appBar: {
    height: '72px',
    maxWidth: '100%',
    zIndex: theme.zIndex.modal + 1
  },
  tab: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    textTransform: 'uppercase',
    color: ' #FFFFFF',
    minWidth: '50px'
  },
  tabContainer: {
    [theme.breakpoints.down('lg')]: {
      padding: '0px,0px,0px,32px'
    }
  },
  buttonStyle: {
    color: ' #FFFFFF'
  }
}));

export default function Header({
  auth: { isAuthenticated, currentUser, token },
  onSignoutStart
}) {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleClickSignout = () => {
    onSignoutStart(token);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/create-your-website' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/signin' && value !== 1) {
      setValue(1);
    }
  }, [value]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.appBar}
      style={{
        backgroundColor: '#091527'
      }}
    >
      <Toolbar>
        <div onClick={() => router.push('/', undefined, { shallow: true })}>
          YACHT CLOUD
        </div>
        <div style={{ flexGrow: 1 }} />
        <Tabs
          value={value}
          className={classes.tabContainer}
          onChange={handleChange}
        >
          <Tab
            className={classes.tab}
            label="Create your own website"
            onClick={() =>
              router.push('/create-your-website', undefined, { shallow: true })
            }
          />
          {!isAuthenticated && (
            <Tab
              className={classes.tab}
              label="Login"
              onClick={() =>
                router.push('/signin', undefined, { shallow: true })
              }
            />
          )}
          {isAuthenticated && (
            <Button
              className={classes.buttonStyle}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {`Hi! ${currentUser?.firstName}`}
            </Button>
          )}
        </Tabs>
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
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => router.push('/manage/dashboard')}>
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleClickSignout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
  );
}
