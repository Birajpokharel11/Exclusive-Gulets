import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Footer } from '../App/components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Minimal = (props) => {
  const { children, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Minimal;
