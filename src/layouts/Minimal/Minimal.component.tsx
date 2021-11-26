import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CustomAlert from '@components/CustomAlert';

import { Footer } from '../App/components';

import container from './Minimal.container';

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
      <CustomAlert />
      <main className={classes.content}>{children}</main>
      <Footer {...rest} />
    </div>
  );
};

export default container(Minimal);
