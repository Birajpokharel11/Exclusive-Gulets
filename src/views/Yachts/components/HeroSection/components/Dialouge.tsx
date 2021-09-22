import React, { useState } from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Paper,
  Typography,
  Grid
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CloseIcon from '@material-ui/icons/Close';
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
  const [calender, setCalender] = React.useState('calendar');
  const [startDate, setStartDate] = useState(new Date());

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
                color="primary"
                size="large"
                onClick={() => setCalender('calendar')}
              >
                Calendar
              </Button>
              <Button
                onClick={() => setCalender('flexible')}
                variant="contained"
                color="secondary"
                size="large"
              >
                I{`'`}m Fexible
              </Button>
            </Box>
            {calender === 'flexible' ? (
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
            ) : (
              <Grid container justifyContent="center">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  monthsShown={2}
                  inline
                />
              </Grid>
            )}
          </Paper>
        </DialogActions>
      </Dialog>
    </div>
  );
}
