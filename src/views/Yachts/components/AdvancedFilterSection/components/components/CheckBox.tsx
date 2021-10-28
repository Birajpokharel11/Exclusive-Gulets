import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  Grid,
  FormControlLabel,
  FormControl,
  FormGroup
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {}
  })
);

export default function CheckBox() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: true,
    jason: false,
    antoine: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const filters = [
    { label: 'hero' },
    { label: 'hero' },
    { label: 'hero' },
    { label: 'hero' }
  ];

  const { gilad, jason, antoine } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <Grid container>
            {filters.map((item, i) => (
              <Grid item xs={6} key={i}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange}
                      name={item.name}
                    />
                  }
                  label={item.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </div>
  );
}
