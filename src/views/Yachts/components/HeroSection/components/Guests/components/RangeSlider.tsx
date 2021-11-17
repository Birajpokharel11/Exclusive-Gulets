import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  InputBase,
  TextField,
  Grid,
  Divider
} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 300,
      [theme.breakpoints.down('xs')]: { padding: '0 0 16px 16px' }
    },
    NEw: { width: '450px', [theme.breakpoints.down('xs')]: { width: '100vw' } },
    multilineColor: {
      color: '#091527',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '22px'
    },
    Border: {
      border: '1px solid rgba(42, 57, 141, 0.5)',
      color: 'white',
      width: '400px',
      padding: '5px 20px 5px 20px',
      borderRadius: '4px',
      [theme.breakpoints.down('xs')]: {
        width: '343px'
      },
      [theme.breakpoints.down(425)]: {
        width: '300px'
      },
      [theme.breakpoints.down(375)]: {
        width: '250px'
      }
    },
    Divider: {
      marginRight: '20px',
      marginLeft: '20px',

      background: 'rgba(42, 57, 141, 0.5)'
    },
    Typography: { fontWeight: 'normal' },
    RangeSlider: {
      color: '#2A398D',
      width: '440px',
      [theme.breakpoints.down('xs')]: {
        width: '382px'
      },
      [theme.breakpoints.down(425)]: {
        width: '345px'
      },
      [theme.breakpoints.down(375)]: {
        width: '285px'
      }
    },
    RangeText: {
      width: '440px',
      [theme.breakpoints.down('xs')]: {
        width: '382px'
      },
      [theme.breakpoints.down(425)]: {
        width: '350px'
      },
      [theme.breakpoints.down(375)]: {
        width: '290px'
      }
    },
    GridText: {
      [theme.breakpoints.down('xs')]: { marginTop: '60px' }
    }
  })
);
export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className={classes.root}>
      <div className={classes.NEw}>
        <Grid container className={classes.GridText}>
          <Grid item md={6} xs={5}>
            <Typography className={classes.Typography} variant="body1">
              Min Guests
            </Typography>
          </Grid>
          <Grid item md={6} xs>
            <Typography className={classes.Typography} variant="body1">
              Max Guests
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Box className={classes.Border}>
        <Grid container>
          <Grid item xs>
            <TextField
              InputProps={{
                disableUnderline: true,
                readOnly: true,
                className: classes.multilineColor
              }}
              id="outlined-size-normal"
              value={value[0]}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.Divider}
          />
          <Grid item xs>
            <TextField
              id="outlined-size-normal"
              InputProps={{
                disableUnderline: true,
                readOnly: true,
                className: classes.multilineColor
              }}
              value={value[1]}
            >
              {' '}
            </TextField>
          </Grid>
        </Grid>
      </Box>
      <div style={{ paddingBottom: '32px' }} />
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        className={classes.RangeSlider}
        getAriaValueText={valuetext}
      />
      <Box
        className={classes.RangeText}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>{value[0]}</Typography>
        <Typography>{value[1]}</Typography>
      </Box>
      {console.log('valueText', value[0])}
    </div>
  );
}
