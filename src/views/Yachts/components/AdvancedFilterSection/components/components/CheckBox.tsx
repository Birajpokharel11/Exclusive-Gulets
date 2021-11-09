import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    },
    heightIncrease: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh'
      }
    }
  })
);
interface Props {
  gilad?: boolean;
  motor?: boolean;
  sailer?: boolean;
  catamaran?: boolean;
  handleChange?: any;
  type?: boolean;
}
export default function CheckBox({
  gilad,
  motor,
  sailer,
  catamaran,
  handleChange,
  type
}: Props) {
  const classes = useStyles();

  // const error = [gilad, motor, sailer, catamaran].filter((v) => v).length !== 2;

  return (
    <div
      className={clsx(classes.root, {
        [classes.heightIncrease]: type
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
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gulet"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {' '}
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={motor}
                    onChange={handleChange}
                    name="motor"
                  />
                }
                label="Motor Yacht"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={sailer}
                    onChange={handleChange}
                    name="sailer"
                  />
                }
                label="Motor Sailer"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={catamaran}
                    onChange={handleChange}
                    name="catamaran"
                  />
                }
                label="Caterman"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
