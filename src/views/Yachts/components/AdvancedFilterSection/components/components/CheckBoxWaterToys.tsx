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
export default function CheckBoxKeyFeatures() {
  const classes = useStyles();
  const [state, setState] = useState({
    jet: true,
    scuba: false,
    inflatable: false,
    waterski: false,
    fishing: false,
    sup1: false,
    jetski1: false,
    mini: false,
    wide: false,
    gym: false,
    sauna: false,
    cockpit: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    jet,
    scuba,
    inflatable,
    waterski,
    fishing,
    sup1,
    jetski1,
    mini,
    wide,
    gym,
    sauna,
    cockpit
  } = state;

  // const error =
  //   [
  //     jet,
  //     scuba,
  //     inflatable,
  //     dwaterski,
  //     fishing,
  //     sup1,
  //     jetski1,
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
                    checked={jet}
                    onChange={handleChange}
                    name="jet"
                  />
                }
                label="Jet Ski"
              />
            </Grid>
            <Grid item xs={6}>
              {' '}
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={scuba}
                    onChange={handleChange}
                    name="scuba"
                  />
                }
                label="Scuba Diving Gear"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={inflatable}
                    onChange={handleChange}
                    name="inflatable"
                  />
                }
                label="Inflatable Water Toys"
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
                label="Waterski(For Kids)"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={fishing}
                    onChange={handleChange}
                    name="fishing"
                  />
                }
                label="Fishing Tackles Basic"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={sup1}
                    onChange={handleChange}
                    name="sup1"
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
                    checked={jetski1}
                    onChange={handleChange}
                    name="jetski1"
                  />
                }
                label="jetski1ming Platform"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={mini}
                    onChange={handleChange}
                    name="mini"
                  />
                }
                label="Mini Bar"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={wide}
                    onChange={handleChange}
                    name="wide"
                  />
                }
                label="Wide Range of water spoerts"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={gym}
                    onChange={handleChange}
                    name="gym"
                  />
                }
                label="Gym"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={sauna}
                    onChange={handleChange}
                    name="sauna"
                  />
                }
                label="Sauna & Welness"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={cockpit}
                    onChange={handleChange}
                    name="cockpit"
                  />
                }
                label="Very Spacious Cockpit"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
