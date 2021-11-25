import { useState, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const useStylesAvatar = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1)
  }
}));

const user = {
  name: 'Shen Zhi',
  avatar: '/static/images/avatars/avatar_11.png',
  bio: 'Brain Director'
};

const Topbar = (props) => {
  const {
    auth: { token, currentUser },
    onSidebarOpen,
    onSignoutStart,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const avatarClass = useStylesAvatar();

  const [notifications] = useState([1, 2, 3]);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleToggle() {
    console.log('handleToggle');
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  const handleClickSignout = () => {
    onSignoutStart(token);
    setOpen(false);
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h4" color="secondary">
            YATCH CLOUD
          </Typography>
        </Link>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={<span>{notifications.length}</span>}
              color="error"
              variant="standard"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            alt="Person"
            className={avatarClass.avatar}
            src={currentUser.imageURL ?? user.avatar}
            ref={anchorRef}
            onClick={handleToggle}
          />
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleClickSignout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </AppBar>
  );
};

export default Topbar;
