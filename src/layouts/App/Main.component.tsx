import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CustomAlert from '@components/CustomAlert';

import { Topbar, Footer } from './components';
import container from './Main.container';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%',
    marginTop: '-72px'
  }
}));

const Main = (props) => {
  const { children, alert, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar {...rest} />
      <CustomAlert />
      <main className={classes.content}>{children}</main>
      <Footer {...rest} />
    </div>
  );
};

export default container(Main);
