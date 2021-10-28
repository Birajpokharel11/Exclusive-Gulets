import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  InputBase,
  TextField,
  Grid,
  Divider
} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300
  },
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
    borderRadius: '4px'
  },
  Divider: {
    marginRight: '20px',
    marginLeft: '20px',

    background: 'rgba(42, 57, 141, 0.5)'
  },
  Typography: { fontWeight: 'normal' }
});

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
      <div style={{ width: '450px' }}>
        <Grid container>
          <Grid item md={6}>
            <Typography className={classes.Typography} variant="body1">
              Min Guests
            </Typography>
          </Grid>
          <Grid item md={6}>
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
        style={{ color: '#2A398D', width: '440px' }}
        getAriaValueText={valuetext}
      />
      <Box
        style={{ width: '440px' }}
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
