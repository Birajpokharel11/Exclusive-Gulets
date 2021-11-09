import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Collapse,
  useMediaQuery
} from '@material-ui/core';
import Slider from './CabinSlider';
import CabinSlider from './CabinSlider';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    heightIncrease: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh'
      }
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

interface Props {
  master: boolean;
  double: boolean;
  twin: boolean;
  triple: boolean;
  single: boolean;
  extra: boolean;
  handleChange: any;
  cabins?: boolean;
}
export default function CheckBoxCabin({
  master,
  double,
  twin,
  triple,
  single,
  extra,
  handleChange,
  cabins
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <div
      className={clsx(classes.root, {
        [classes.heightIncrease]: cabins
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
                    checked={master}
                    onChange={handleChange}
                    name="master"
                  />
                }
                label="Master Cabin"
              />
              <Collapse in={master}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <CabinSlider />
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
