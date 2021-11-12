import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Box, Button, Divider, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(3),
      width: '100%'
    },
    Divider: {
      marginTop: '16px',
      marginBottom: '16px'
    }
  })
);

export default function CheckBoxDestinations() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    oliver: false,
    van: false,
    april: false,
    ralph: false,
    omar: false,
    carlos: false,
    miriam: false,
    bradley: false,
    virginia: false,
    kelly: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    oliver,
    van,
    april,
    ralph,
    omar,
    carlos,
    miriam,
    bradley,
    virginia,
    kelly
  } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Grid container style={{ height: '60vh', overflow: 'scroll' }}>
          <FormGroup>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={oliver}
                    onChange={handleChange}
                    name="oliver"
                  />
                }
                label="Oliver Hansen"
              />
            </Grid>
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={van}
                  onChange={handleChange}
                  name="van"
                />
              }
              label="April Tucker"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={april}
                  onChange={handleChange}
                  name="april"
                />
              }
              label="Ralph Hubbard"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={ralph}
                  onChange={handleChange}
                  name="ralph"
                />
              }
              label="Omar Alexander"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={omar}
                  onChange={handleChange}
                  name="omar"
                />
              }
              label="Carlos Abbott"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={carlos}
                  onChange={handleChange}
                  name="carlos"
                />
              }
              label="Miriam Wagner"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />{' '}
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={miriam}
                  onChange={handleChange}
                  name="miriam"
                />
              }
              label="Bradley Wilkerson"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={bradley}
                  onChange={handleChange}
                  name="bradley"
                />
              }
              label="Virginia Andrews"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={virginia}
                  onChange={handleChange}
                  name="virginia"
                />
              }
              label="Antoine Llorca"
            />{' '}
            <Divider
              className={classes.Divider}
              variant="middle"
              style={{ marginBottom: '15px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={kelly}
                  onChange={handleChange}
                  name="kelly"
                />
              }
              label="Kelly Snyder"
            />{' '}
          </FormGroup>
        </Grid>
      </FormControl>
    </div>
  );
}
