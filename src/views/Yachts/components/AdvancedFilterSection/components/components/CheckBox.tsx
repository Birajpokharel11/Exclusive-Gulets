import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';

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

export default function CheckBox() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    motor: false,
    sailer: false,
    catamaran: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, motor, sailer, catamaran } = state;
  const error = [gilad, motor, sailer, catamaran].filter((v) => v).length !== 2;

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
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gulet"
              />
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={catamaran}
                    onChange={handleChange}
                    name="Catamaran"
                  />
                }
                label="Sailer Llorca"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
