import React from 'react';
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
import CabinSlider from './CabinSlider';
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
export default function CheckBoxCabin() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    master: true,
    double: false,
    twin: false,
    triple: false,
    single: false,
    extra: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { master, double, twin, triple, single, extra } = state;
  const error =
    [master, double, twin, triple, single, extra].filter((v) => v).length !== 2;

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
                    checked={master}
                    onChange={handleChange}
                    name="master"
                  />
                }
                label="Master Cabin"
              />
              <Collapse in={master}>
                <CabinSlider />
              </Collapse>
            </Grid>
            <Grid item xs={6}>
              {' '}
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={double}
                    onChange={handleChange}
                    name="double"
                  />
                }
                label="Double Cabin"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={twin}
                    onChange={handleChange}
                    name="twin"
                  />
                }
                label="Twin Cabin"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={triple}
                    onChange={handleChange}
                    name="triple"
                  />
                }
                label="Triple Cabin"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={single}
                    onChange={handleChange}
                    name="single"
                  />
                }
                label="Single Cabin"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={extra}
                    onChange={handleChange}
                    name="extra"
                  />
                }
                label="Extra Bunk Cabin"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
