import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content'
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120
    },
    formControlLabel: {
      marginTop: theme.spacing(1)
    },
    Button: {
      width: '190px',
      height: '52px',
      backgroundColor: '  #AB3996',

      [theme.breakpoints.down(900)]: {
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingRight: '16px',
        paddingLeft: '17px',
        width: '150px',
        height: ' 52px'
      },
      [theme.breakpoints.down(900)]: {
        width: '120px',
        height: ' 52px'
      }
    },
    ButtonTypo: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '23px',
      color: 'white',
      [theme.breakpoints.down(360)]: {
        width: '827px',
        minHeight: ' 22px',
        lineHeight: '22px',
        textAlign: 'center'
      }
    },
    Title: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '32px',
      lineHeight: '38px',
      color: '#2A398D',
      minWidth: '505px',
      minHeight: '38px',
      textAlign: 'center'
    },
    SubHeading: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '18px',
      color: '#2A398D',
      minWidth: '755px',
      maxHeight: '22px',
      textAlign: 'center',
      paddingBottom: '2%',
      [theme.breakpoints.down(800)]: {
        minWidth: '500px',
        paddingBottom: '9%'
      }
    },
    Border: {
      border: '3px dashed #AB3996',
      width: '92%',
      marginLeft: '2%',
      marginRight: '2%',
      padding: '2%',
      background: '#F7F7F7'
    },
    Reservation: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '24px',
      color: '#2A398D'
    },
    Checkin: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#2A398D',
      paddingRight: '2%'
    },
    CheckOut: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '21.6px',
      color: '#2A398D'
    },
    LineThroughText: {
      textAlign: 'center',
      textDecorationLine: 'line-through',
      color: '#2A398D;'
    },
    Discount: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '32px',
      lineHeight: '38px',
      color: ' #2A398D',
      textAlign: 'right'
    },
    Cancellation: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '38px',
      textAlign: 'right',
      color: ' #2A398D'
    },
    Alldetails: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '19px',
      color: '#AB3996',
      textAlign: 'right'
    },
    Questions: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#2A398D'
    },
    Answers: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#2A398D'
    },
    DownloadBtn: {
      fontFamily: 'lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '22px',
      color: '#AB3996'
    }
  })
);

export default function MaxWidthDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [text, setText] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(500));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTextopen = () => {
    setText((prev) => !prev);
  };
  return (
    <React.Fragment>
      <Button
        className={classes.Button}
        data-cy="ViewOffer"
        onClick={handleClickOpen}
      >
        <Typography className={classes.ButtonTypo}>View Offer</Typography>
      </Button>
      <Dialog
        style={{ height: '112vh' }}
        fullWidth={fullWidth}
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        {' '}
        <IconButton
          aria-label="close"
          style={{ justifyContent: 'flex-end' }}
          onClick={handleClose}
          data-cy="Close-Icon-1"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography className={classes.Title}>
            {' '}
            There is a special offer for this yacht!
          </Typography>
          <Typography className={classes.SubHeading}>
            I’m the offer description text. Nice to meet you. You can write on
            me whatever you want.
          </Typography>
          <Box>
            <Paper className={classes.Border}>
              <Grid container direction="row" alignItems="center">
                <Grid item md={8}>
                  <Typography className={classes.Reservation}>
                    Aresteas Reservation Details
                  </Typography>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <Typography className={classes.Checkin}>
                      Check-in Date / Destination
                    </Typography>
                    <Typography className={classes.CheckOut}>
                      21.05.2021 / Marmaris
                    </Typography>
                  </div>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <Typography className={classes.Checkin}>
                      Check-out Date / Destination
                    </Typography>
                    <Typography className={classes.CheckOut}>
                      31.05.2021 / Marmaris
                    </Typography>
                  </div>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <Grid item md>
                  <Typography className={classes.LineThroughText}>
                    € 155.000
                  </Typography>
                  <br />
                  <Typography className={classes.Discount}>
                    € 155.000
                  </Typography>
                  <br />
                  <Button
                    style={{
                      minWidth: '190px',
                      maxHeight: '52px',
                      backgroundColor: '  #AB3996'
                    }}
                    data-cy="Claim Now"
                    onClick={handleClickOpen}
                  >
                    <Typography className={classes.ButtonTypo}>
                      Claim Now
                    </Typography>
                  </Button>
                  <br />
                  <br />
                  <Button
                    style={{ float: 'right' }}
                    data-cy="Free-Cancellation"
                  >
                    <Typography className={classes.Cancellation}>
                      Free cancellation
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          {text && (
            <Box
              style={{
                marginLeft: '4%',
                marginRight: '4%',
                marginTop: '2%',
                marginBottom: '2%'
              }}
            >
              <div style={{ display: 'flex', gap: '3rem' }}>
                <Typography className={classes.Questions}>
                  Sample Itinerary
                </Typography>
                <Button data-cy="Download-Sample">
                  <Typography className={classes.DownloadBtn}>
                    Download
                  </Typography>
                </Button>
              </div>
              <Box pt={1}>
                <Typography className={classes.Answers}>
                  <span className={classes.Questions}>
                    How can I go to check-in destination?
                  </span>
                  <br />
                  You can go there via Blabla Airport
                </Typography>
              </Box>
              <Box pt={2}>
                <Typography className={classes.Answers}>
                  <span className={classes.Questions}>What is included?</span>
                  <br />
                  Wages and food for the crew, Croation 13% of VAI, fuel for
                  main engines up to 4 hours cruising per day, fuel for 24
                  hours/day of generator use, complete linen and towels, yacht
                  insurance, service on board, sojourn taxes, yacht cleaning,
                  Wi-Fi.
                </Typography>
              </Box>
            </Box>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '1%'
            }}
          >
            <Button
              onClick={handleTextopen}
              data-cy="more-Details-less-Details"
            >
              <Box>
                <Typography className={classes.Alldetails}>
                  Show {text ? 'Less' : 'More'} Details About This Offer
                </Typography>
              </Box>
            </Button>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
