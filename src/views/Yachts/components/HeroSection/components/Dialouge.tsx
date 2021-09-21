import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { red } from '@material-ui/core/colors';
import {
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  DialogActions,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      background: 'transparent',
      color: 'white',
      fontSize: 18,
      padding: '10px 26px 10px 12px'
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      width: '200px',
      [theme.breakpoints.down('md')]: {
        width: '150px'
      }
    },
    Button: { '&:hover': { baackground: 'red' } },
    icon: {
      fill: 'white',
      transform: 'rotate(180deg)'
    }
  })
);

export default function Dialouge({ w, setw }) {
  const classes = useStyles();

  const handleClose = () => {
    setw(!w);
  };
  const [week, setWeek] = React.useState(false);
  const [Cweek, setCweek] = React.useState(false);
  const [month, setMonth] = React.useState(false);
  const [calender, setCalender] = React.useState(false);
  return (
    <div>
      <Dialog open={w} onClose={handleClose}>
        <DialogActions>
          <Paper
            elevation={0}
            style={{
              height: '398px',
              width: '720px'
            }}
          >
            <Box
              p={2}
              display="flex"
              justifyContent="center"
              style={{ gap: '1rem' }}
            >
              <Button
                className={classes.Button}
                variant="contained"
                color="secondary"
                onClick={() => setCalender(!calender)}
              >
                Calender
              </Button>
              <Button
                onClick={() => setCalender(!calender)}
                variant="contained"
                color="primary"
              >
                I{`'`}m Fexible
              </Button>
            </Box>
            {!calender && (
              <Box>
                <Box p={2} display="flex" justifyContent="center">
                  <Typography>
                    Stay For<span> a week</span>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ gap: '1rem' }}
                >
                  <Box color={week ? 'primary' : 'rgba(42, 57, 141, 0.5)'}>
                    <Button
                      onClick={() => setWeek(!week)}
                      variant="outlined"
                      color="inherit"
                    >
                      A Week
                    </Button>
                  </Box>
                  <Box color={Cweek ? 'primary' : 'rgba(42, 57, 141, 0.5)'}>
                    <Button
                      onClick={() => setCweek(!Cweek)}
                      variant="outlined"
                      color="inherit"
                    >
                      A Couple of weeks
                    </Button>
                  </Box>
                  <Box color={month ? 'primary' : 'rgba(42, 57, 141, 0.5)'}>
                    <Button
                      onClick={() => setMonth(!month)}
                      variant="outlined"
                      color="inherit"
                    >
                      A Month
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
            {<Box></Box>}
          </Paper>
        </DialogActions>
      </Dialog>
    </div>
  );
}
