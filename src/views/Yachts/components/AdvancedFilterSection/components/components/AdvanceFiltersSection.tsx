import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  InputBase,
  TextField,
  Grid,
  Divider
} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';

const useStyles = makeStyles((theme) =>
  createStyles({
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
      [theme.breakpoints.down('xs')]: {
        width: '343px'
      },
      height: '52px',
      padding: '5px 20px 5px 20px',
      borderRadius: '4px'
    },
    Divider: {
      marginRight: '20px',
      marginLeft: '20px',

      background: 'rgba(42, 57, 141, 0.5)'
    },
    Typography: { fontWeight: 'normal' },
    sliders: {
      color: '#2A398D',
      width: '440px',
      [theme.breakpoints.down('xs')]: {
        width: '382px'
      }
    },
    Values: {
      width: '440px',
      [theme.breakpoints.down('xs')]: {
        width: '382px'
      }
    },
    heightIncrease: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh'
      }
    }
  })
);
interface Props {
  Range?: any[];
  RangeText?: any[];
  next_page?: number;
  price?: boolean;
  length?: boolean;
  fetchPostsStart?: (page) => any;
}
export default function AdvancedFilterSection({
  Range,
  RangeText,
  price,
  length
}: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>(Range);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.heightIncrease]: price || length
      })}
    >
      <div style={{ width: '450px' }}>
        <Grid container>
          <Grid item md={6} xs={5}>
            <Typography className={classes.Typography} variant="body1">
              {RangeText[0]}
            </Typography>
          </Grid>
          <Grid item md={6} xs>
            <Typography className={classes.Typography} variant="body1">
              {RangeText[1]}
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
      <div style={{ paddingBottom: '12px' }} />
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        className={classes.sliders}
        getAriaValueText={valuetext}
      />
      <Box
        className={classes.Values}
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
