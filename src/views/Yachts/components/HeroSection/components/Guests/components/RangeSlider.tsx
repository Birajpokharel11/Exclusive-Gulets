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
  }
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
      <Box
        style={{ border: '1px solid rgba(42, 57, 141, 0.5)', padding: '5px' }}
      >
        <Grid container>
          <Grid item xs>
            <TextField
              InputProps={{ disableUnderline: true, readOnly: true }}
              id="outlined-size-normal"
              value={value[0]}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            style={{ marginRight: '20px' }}
          />
          <Grid item xs>
            <TextField
              id="outlined-size-normal"
              InputProps={{ disableUnderline: true, readOnly: true }}
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
        style={{ color: '#2A398D' }}
        getAriaValueText={valuetext}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>{value[0]}</Typography>
        <Typography>{value[1]}</Typography>
      </Box>
      {console.log('valueText', value[0])}
    </div>
  );
}
