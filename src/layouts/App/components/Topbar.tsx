import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
////////////////////////////////////////////////////////////
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useScrollTrigger } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import SearchIcon from '@material-ui/icons/Search';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import PreviewDrawer from '@views/Yachts/components/PreviewDrawer';
import SearchDialouge from '@components/SearchDialouge';
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginTop: '8px'
  },
  logo: {
    maxWidth: ' 210px',
    minHeight: '35.84px',
    cursor: 'pointer',
    [theme.breakpoints.down(340)]: {
      width: '180px'
    }
  },
  AppBar: {
    height: '72px',
    maxWidth: '100%',
    zIndex: 1
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
  Menu: {
    backgroundColor: 'white',
    zIndex: 2,
    color: '#2A398D'
  },
  logoContainer: {
    padding: 0
  },
  tabContainer: {
    [theme.breakpoints.down('lg')]: {
      padding: '0px,0px,0px,32px'
    }
  },
  drawer: {
    backgroundColor: 'rgba(9, 21, 39, 0.8)'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#071529D9',
    paddingRight: '2%',
    [theme.breakpoints.down(785)]: {
      width: '80%'
    },
    [theme.breakpoints.down(700)]: {
      width: '100%'
    }
  },
  listStyle: {
    marginTop: '24px'
  },
  textColor: {
    color: 'red'
  },
  hide: {
    display: 'none'
  }
  // transparentBackground: {
  //   backgroundColor: ' rgba(9, 21, 39, 0.8);'
  // }
}));

export default function Header({
  siteCoordinator: {
    domain: { name }
  }
}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });
  console.log('Triggered', trigger);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleDrawerOpen = () => {
    setMobileOpen(true);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setOpen(false);
  };

  //////////////////////////////////////////////////////////Menus
  const [tabopen, setTabopen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setTabopen((prevOpen) => !prevOpen);
  };

  const handleCloseTab = (event) => {
    router.push('/about', undefined, { shallow: true });
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setTabopen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setTabopen(false);
    }
  }
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/YATCHS' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/OFFERS' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/destinations' && value !== 3) {
      setValue(3);
    } else if (
      window.location.pathname === '/BESPOKEEXPERIENCES' &&
      value !== 4
    ) {
      setValue(4);
    } else if (window.location.pathname === '/NEWSBLOGS' && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === '/MORE' && value !== 6) {
      setValue(6);
    } else if (window.location.pathname === '/ABOUTYOU' && value !== 6) {
      setValue(6);
    } else if (window.location.pathname === '/DINNING' && value !== 6) {
      setValue(6);
    }
  }, [value]);
  const router = useRouter();

  // /Search///////////////////////////////////////
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    console.log(search, 'search');
    setSearch(!search);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.AppBar}
        style={{
          backgroundColor: trigger ? '#091527' : 'rgba(9, 21, 39, 0.8)'
        }}
      >
        <Toolbar>
          <div onClick={() => router.push('/', undefined, { shallow: true })}>
            <Typography
              variant="h3"
              color="secondary"
              style={{ textTransform: 'uppercase' }}
            >
              {name ?? ''}
            </Typography>
          </div>
          <div style={{ flexGrow: 1 }} />
          <Hidden mdDown>
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
            >
              <Tab
                label="sad"
                style={{ display: 'none', padding: '0', margin: '0' }}
              />
              <Link href="/yachts" passHref>
                <a style={{ textDecoration: 'none' }}>
                  <Tab
                    className={classes.tab}
                    label="YACHTS"
                    data-cy="YACHTS"
                  />
                </a>
              </Link>
              <Link href="/yachts/offers" passHref>
                <a style={{ textDecoration: 'none' }}>
                  <Tab
                    className={classes.tab}
                    label="OFFERS"
                    data-cy="OFFERS"
                  />
                </a>
              </Link>
              <Link href="/destinations" passHref>
                <a style={{ textDecoration: 'none' }}>
                  <Tab
                    className={classes.tab}
                    label="DESTINATIONS"
                    data-cy="DESTINATIONS"
                  />
                </a>
              </Link>
              <Link href="/experiences" passHref>
                <a style={{ textDecoration: 'none' }}>
                  <Tab
                    className={classes.tab}
                    label="BESPOKE EXPERIENCES"
                    data-cy="BESPOKEEXPERIENCES"
                  />
                </a>
              </Link>

              <Link href="/blogs" passHref>
                <Tab
                  className={classes.tab}
                  label="NEWS & BLOGS"
                  data-cy="NEWSBLOGS"
                />
              </Link>

              <Tab
                className={classes.tab}
                label="MORE"
                ref={anchorRef}
                aria-controls={tabopen ? 'menu-list-grow' : undefined}
                onClick={handleToggle}
                data-cy="MORE"
              />
              <Popper
                open={tabopen}
                anchorEl={anchorRef.current}
                role={undefined}
                style={{ zIndex: 2 }}
              >
                <Paper style={{ marginTop: '0.5rem' }}>
                  <ClickAwayListener onClickAway={handleCloseTab}>
                    <MenuList
                      autoFocusItem={tabopen}
                      className={clsx(classes.tab, classes.Menu)}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <Link href="/about" passHref>
                        <MenuItem
                          className={clsx(classes.tab, classes.Menu)}
                          data-cy="ABOUTYOU"
                        >
                          ABOUT YOU
                        </MenuItem>
                      </Link>

                      <Link href="/dinning" passHref>
                        <MenuItem
                          className={clsx(classes.tab, classes.Menu)}
                          data-cy="DINNING"
                        >
                          DINNING
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popper>
            </Tabs>
          </Hidden>
          <Hidden xsDown>
            <Tooltip title="Search For Yachts">
              <IconButton
                onClick={handleSearch}
                color="inherit"
                data-cy="SearchIcon"
              >
                <Image
                  src="/assets/images/Search.svg"
                  height={18}
                  width={18}
                  alt="Search"
                />
              </IconButton>
            </Tooltip>
            {/* <Tooltip> */}
            <IconButton
              href="mailto:info@exclusivegulets.com"
              color="inherit"
              data-cy="PhoneEnabledIcon"
            >
              <Image
                src="/assets/images/Mail.png"
                height={14}
                width={20}
                alt="Search"
              />
            </IconButton>{' '}
            {/* </Tooltip> */}
          </Hidden>
          <IconButton
            href="tel:+44 2081445834"
            color="inherit"
            data-cy="EmailIcon"
          >
            <PhoneEnabledIcon />
          </IconButton>{' '}
          <Hidden smDown>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: 'rgba(255, 255, 255,  0.23)',
                marginTop: '4px'
              }}
            />
            <IconButton color="inherit" data-cy="PersonIcon">
              <PersonIcon />
              <Typography
                className={classes.tab}
                onClick={() => router.push('/signin')}
              >
                Members
              </Typography>
            </IconButton>{' '}
          </Hidden>
          <Hidden xsDown>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                backgroundColor: 'rgba(255, 255, 255,  0.23)',
                marginTop: '4px',
                marginLeft: '8px'
              }}
            />
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(mobileOpen && classes.hide)}
              data-cy="Menu-Icon"
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={handleDrawerClose}
              color="inherit"
              className={clsx(!mobileOpen && classes.hide)}
              data-cy="Close-Icon"
            >
              <CloseIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div style={{ padding: '162px 0 92px 20px', color: 'white' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '2%'
            }}
          >
            {' '}
            <Hidden smUp>
              <div>
                <IconButton color="inherit" data-cy="TMB-SearchIcon">
                  <Image
                    src="/assets/images/Search.svg"
                    height={20}
                    width={20}
                    alt="Search"
                  />
                </IconButton>
                <IconButton color="inherit" data-cy="TMB-PhoneEnabledIcon">
                  <Image
                    src="/assets/images/Mail.png"
                    height={14}
                    width={20}
                    alt="Search"
                  />
                </IconButton>{' '}
              </div>
            </Hidden>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" data-cy="TMB-PersonIcon">
                <PersonIcon />{' '}
                <Typography className={classes.tab}>Members</Typography>
              </IconButton>{' '}
            </div>
          </div>

          <List className={classes.tab}>
            <Button
              color="inherit"
              onClick={handleDrawerClose}
              data-cy="TMB-YATCHS"
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/yachts" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        YACHTS
                      </Typography>
                    </Link>
                  }
                ></ListItemText>
              </ListItem>
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              data-cy="TMB-OFFERS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/yachts/offers" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        OFFERS
                      </Typography>
                    </Link>
                  }
                ></ListItemText>
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              data-cy="TMB-DESTINATIONS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/destinations" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        DESTINATIONS
                      </Typography>
                    </Link>
                  }
                />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              data-cy="TMB-BESPOKE-EXPERIENCES"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/experiences" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        BESPOKE EXPERIENCES
                      </Typography>
                    </Link>
                  }
                />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              data-cy="TMB-NEWS-BLOGS"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/blogs" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        NEWS & BLOGS
                      </Typography>
                    </Link>
                  }
                />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />

            <Button
              color="inherit"
              data-cy="TMB-ABOUT-YOU"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="/about" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        ABOUT YOU
                      </Typography>
                    </Link>
                  }
                />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
            <Button
              color="inherit"
              data-cy="TMB-Dinning"
              onClick={handleDrawerClose}
            >
              <ListItem className={classes.listStyle}>
                <ListItemText
                  primary={
                    <Link href="dinning" passHref>
                      <Typography variant="h4" style={{ color: 'white' }}>
                        DINNING
                      </Typography>
                    </Link>
                  }
                />
              </ListItem>{' '}
            </Button>
            <Divider variant="middle" style={{ backgroundColor: 'white' }} />
          </List>
        </div>
      </Drawer>
      <SearchDialouge search={search} setSearch={setSearch} />
    </>
  );
}
