import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
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
    },
    Button: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: '#AB3996',
      fontStyle: 'normal'
    }
  })
);
interface Props {
  hot: boolean;
  satellite: boolean;
  large: boolean;
  safe: boolean;
  newly: boolean;
  fly: boolean;
  swim: boolean;
  mini: boolean;
  wide: boolean;
  gym: boolean;
  sauna: boolean;
  cockpit: boolean;
  handleChange: any;
}
export default function CheckBoxKeyFeatures({
  hot,
  satellite,
  large,
  safe,
  newly,
  fly,
  swim,
  mini,
  wide,
  gym,
  sauna,
  cockpit,
  handleChange
}: Props) {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);

  // const error =
  //   [
  //     hot,
  //     satellite,
  //     large,
  //     safe,
  //     newly,
  //     fly,
  //     swim,
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
                    checked={hot}
                    onChange={handleChange}
                    name="hot"
                  />
                }
                label="Hot Tub"
              />
            </Grid>
            <Grid item xs={6}>
              {' '}
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={satellite}
                    onChange={handleChange}
                    name="satellite"
                  />
                }
                label="Satellite Antenna"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={large}
                    onChange={handleChange}
                    name="large"
                  />
                }
                label="Large Deck Space"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={safe}
                    onChange={handleChange}
                    name="safe"
                  />
                }
                label="Safe Box"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={newly}
                    onChange={handleChange}
                    name="newly"
                  />
                }
                label="Newly Built"
              />
            </Grid>{' '}
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={fly}
                    onChange={handleChange}
                    name="fly"
                  />
                }
                label="Fly Bridge"
              />
            </Grid>
            <br />
            {showMore && (
              <>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={swim}
                        onChange={handleChange}
                        name="swim"
                      />
                    }
                    label="Swimming Platform"
                  />
                </Grid>
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
