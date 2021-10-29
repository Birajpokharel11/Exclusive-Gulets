import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Collapse
} from '@material-ui/core';
import Slider from './CabinSlider';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
);
export default function CheckBoxTags() {
  const classes = useStyles();
  const [state, setState] = useState({
    instant: true,
    special: false,
    finest: false,
    waterski: false,
    loved: false,
    yachts: false,
    gourmet: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { instant, special, finest, waterski, loved, yachts, gourmet } = state;

  // const error =
  //   [
  //     instant,
  //     special,
  //     finest,
  //     dwaterski,
  //     loved,
  //     yachts,
  //     gourmet,
  //     mini,
  //     wide,
  //     gym,
  //     sauna,
  //     cockpit
  //   ].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <Grid container>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={instant}
                    onChange={handleChange}
                    name="instant"
                  />
                }
                label="Instant Booking"
              />
            </Grid>
            <Grid item xs={6}>
              {' '}
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={special}
                    onChange={handleChange}
                    name="special"
                  />
                }
                label="Special Offers"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={finest}
                    onChange={handleChange}
                    name="finest"
                  />
                }
                label="Finest Gulet & Yachts "
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={waterski}
                    onChange={handleChange}
                    name="dwaterski"
                  />
                }
                label="Loved By Our Guests"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={loved}
                    onChange={handleChange}
                    name="loved"
                  />
                }
                label="Yachts For Family Adventures"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={yachts}
                    onChange={handleChange}
                    name="yachts"
                  />
                }
                label="2x SUP"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={gourmet}
                    onChange={handleChange}
                    name="gourmet"
                  />
                }
                label="Gourmet Dining"
              />
            </Grid>{' '}
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
