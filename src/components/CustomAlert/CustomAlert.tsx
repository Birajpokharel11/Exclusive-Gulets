/* eslint-disable object-curly-newline */
import { useState, useEffect } from 'react';
import { Collapse } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import error from '../../assets/images/AlertIcons/error.svg';
import info from '../../assets/images/AlertIcons/info.svg';
import success from '../../assets/images/AlertIcons/success.svg';
import warning from '../../assets/images/AlertIcons/warning.svg';

import container from './CustomAlert.container';

const useStyles = makeStyles((theme) => ({
  alert: {
    // zIndex: 1502,
    position: 'relative',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      maxWidth: theme.breakpoints.width('lg')
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  }
}));

const CustomAlert = ({ openAlert, severity, message, onCloseAlert }) => {
  const classes = useStyles();

  const [color, setColor] = useState('#FFA9A9');
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    if (severity === 'error') {
      setColor('#FFA9A9');
      setLogo(error);
    } else if (severity === 'success') {
      setColor('#BFFFA9');
      setLogo(success);
    } else if (severity === 'warning') {
      setColor('#FFDDA9');
      setLogo(warning);
    } else if (severity === 'info') {
      setColor('#A9E5FF');
      setLogo(info);
    }

    if (openAlert) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        onCloseAlert();
      }, 5000);
    }
  }, [severity, openAlert, onCloseAlert, color]);

  return (
    <div
      style={{
        backgroundColor: color
        // zIndex: 1502
      }}
    >
      <Collapse in={openAlert} timeout="auto">
        <MuiAlert
          severity={severity}
          classes={{ root: classes.alert }}
          icon={<img src={logo} alt="logo" />}
        >
          {message}
        </MuiAlert>
      </Collapse>
    </div>
  );
};

export default container(CustomAlert);