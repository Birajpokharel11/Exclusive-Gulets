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
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
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

  const { currentUser } = rest.auth;

  const isVisible = (role) => {
    if (!currentUser.roles) {
      return false;
    }
    if (currentUser.roles.indexOf(role) === -1) {
      return false;
    }
    return true;
  };

  const pages = [
    {
      title: 'Dashboard',
      href: '/manage/dashboard',
      icon: <DashboardIcon />,
      visible: true
    },
    {
      title: 'News and Blogs',
      href: '/manage/blogs',
      icon: <PeopleIcon />,
      visible: isVisible('ROLE_BROKER')
    },
    {
      title: 'Experiences',
      href: '/manage/experiences',
      icon: <ShoppingBasketIcon />,
      visible: isVisible('ROLE_BROKER')
    },
    {
      title: 'Yachts',
      href: '/manage/yachts',
      icon: <DirectionsBoatIcon />,
      visible: isVisible('ROLE_MANAGER')
    },
    {
      title: 'Offers',
      href: '/manage/offers',
      icon: <LocalOfferIcon />,
      visible: isVisible('ROLE_MANAGER')
    },
    {
      title: 'Destinations',
      href: '/manage/destinations',
      icon: <LocalOfferIcon />,
      visible: isVisible('ROLE_MANAGER')
    },
    {
      title: 'Settings',
      href: '/manage/settings',
      icon: <SettingsIcon />,
      visible: isVisible('ROLE_BROKER')
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
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile {...rest} />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} {...rest} />
      </div>
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
