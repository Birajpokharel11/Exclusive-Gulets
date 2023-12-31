import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Collapse,
  Button
} from '@material-ui/core';
import Slider from './CabinSlider';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    },
    Button: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: '#AB3996',
      fontStyle: 'normal'
    },
    heightIncrease: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh'
      }
    }
  })
);
interface Props {
  jet: boolean;
  scuba: boolean;
  inflatable: boolean;
  waterski: boolean;
  fishing: boolean;
  sup1: boolean;
  jetski1: boolean;
  handleChange: any;
  waterToys?: boolean;
}
export default function CheckBoxKeyFeatures({
  jet,
  scuba,
  inflatable,
  waterski,
  fishing,
  sup1,
  jetski1,
  waterToys,

  handleChange
}: Props) {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={clsx(classes.root, {
        [classes.heightIncrease]: waterToys
      })}
    >
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <Grid container>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={waterski}
                    onChange={handleChange}
                    name="waterski"
                  />
                }
                label="Waterski(For Kids)"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            {showMore && (
              <>
                <Grid item sm={6} xs={12}>
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
              </>
            )}
            <Button
              className={classes.Button}
              onClick={() => setShowMore((prev) => !prev)}
            >
              Show {!showMore ? 'More' : 'less'} Tags
            </Button>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
