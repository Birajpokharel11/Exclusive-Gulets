import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Topbar, Footer } from './components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Main = (props) => {
  const { children, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar {...rest} />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
