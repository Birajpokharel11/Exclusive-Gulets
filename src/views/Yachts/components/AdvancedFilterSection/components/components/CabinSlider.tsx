import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 167
  },
  Slider: {
    color: '#2A398D'
  }
});

function valuetext(value: number) {
  return `${value}°C`;
}

export default function CabinSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        className={classes.Slider}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
