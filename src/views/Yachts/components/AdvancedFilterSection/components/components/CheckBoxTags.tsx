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
    Button: { color: '#AB3996' },
    heightIncrease: {
      [theme.breakpoints.down('xs')]: {
        height: '55vh'
      }
    }
  })
);
interface Props {
  instant: boolean;
  special: boolean;
  finest: boolean;
  loved: boolean;
  family: boolean;
  SUP: boolean;
  gourmet: boolean;
  handleChange: any;
  tags: boolean;
}
export default function CheckBoxTags({
  instant,
  special,
  finest,
  loved,
  family,
  SUP,
  gourmet,
  handleChange,
  tags
}: Props) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={clsx(classes.root, {
        [classes.heightIncrease]: tags
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
                    checked={instant}
                    onChange={handleChange}
                    name="instant"
                  />
                }
                label="Instant Booking"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
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
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={loved}
                    onChange={handleChange}
                    name="loved"
                  />
                }
                label="Loved By Our Guests"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={family}
                    onChange={handleChange}
                    name="family"
                  />
                }
                label="Yachts For Family Adventures"
              />
            </Grid>{' '}
            <Grid item sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={SUP}
                    onChange={handleChange}
                    name="SUP"
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
                        checked={gourmet}
                        onChange={handleChange}
                        name="gourmet"
                      />
                    }
                    label="Gourmet Dining"
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
