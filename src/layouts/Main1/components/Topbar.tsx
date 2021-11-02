import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';

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
  }
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

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
          <img
            src="/assets/images/logo.svg"
            alt="me"
            className={classes.logo}
          />
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
              router.push('/createYourWebsite', undefined, { shallow: true })
            }
          />
          <Tab
            className={classes.tab}
            label="Login"
            onClick={() => router.push('/signin', undefined, { shallow: true })}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}