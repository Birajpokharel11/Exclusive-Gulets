import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import Checkin from './Checkin';
import Checkout from './Checkout';

const useStyles = makeStyles((theme) =>
  createStyles({
    ButtonGroup: {
      border: ' 1px solid rgba(255, 255, 255, 0.5)',
      width: '450px',
      background: 'rgba(12, 22, 37, 0.6)',
      [theme.breakpoints.down('md')]: {
        width: '350px'
      },
      height: '50px',
      borderRadius: '4px',
      [theme.breakpoints.down(530)]: {
        fontSize: '14px'
      }
    }
  })
);

export default function Box() {
  const classes = useStyles();
  return (
    <div className={classes.ButtonGroup}>
      <Grid container justifyContent="center">
        <Grid item xs>
          <Checkin />
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          style={{
            backgroundColor: 'white',
            marginTop: '5px',
            marginBottom: '5px',
            minHeight: '40px'
          }}
        />
        <Grid item xs>
          <Checkout />
        </Grid>
      </Grid>
    </div>
  );
}
