import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/manage/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'News and Blogs',
      href: '/manage/blogs',
      icon: <PeopleIcon />
    },
    {
      title: 'Experiences',
      href: '/manage/experiences',
      icon: <ShoppingBasketIcon />
    },
    {
      title: 'Yachts',
      href: '/manage/yachts',
      icon: <DirectionsBoatIcon />
    },
    {
      title: 'Settings',
      href: '/manage/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <PerfectScrollbar>
        <div {...rest} className={clsx(classes.root, className)}>
          <Profile {...rest} />
          <Divider className={classes.divider} />
          <SidebarNav className={classes.nav} pages={pages} {...rest} />
        </div>
      </PerfectScrollbar>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
