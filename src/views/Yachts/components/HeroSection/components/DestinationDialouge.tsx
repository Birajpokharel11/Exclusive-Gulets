import React from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Box, Checkbox, Divider, IconButton, Paper } from '@material-ui/core';
import Typography from '@modules/components/Typography';
import CheckBoxDestinations from './CheckBoxDestinationMobile';
import FilterMobile from './filterMobilte';
import Guests from './Guests';
import RangeSlider from './Guests/components/RangeSlider';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    Dialouge: { marginTop: '0px', height: '100vh' },

    Button1: {
      height: '52px',
      width: '125px',
      border: '1px solid #2A398D'
    },
    Button2: {
      height: '52px',
      width: '200px',
      background: '#2A398D',
      color: 'white',
      '&:hover': { background: '#2A398D' }
    },
    Next: {
      height: '52px',
      width: '200px',
      background: '#2A398D',
      color: 'white',
      '&:hover': { background: '#2A398D' }
    }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DestinationDialouge() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  ////////////////////
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ];
  const length = names.length;

  const [personName, setPersonName] = React.useState<string[]>([]);
  //////////////////////////////////////////////////

  function getSteps() {
    return [
      'Select master blaster campaign settings',
      'Create an ad group',
      'Create an ad'
    ];
  }
  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <FilterMobile />;
      case 1:
        return <CheckBoxDestinations />;
      case 2:
        return <RangeSlider />;
      default:
        return <CheckBoxDestinations />;
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log('jasd0', activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    console.log('jasd0', activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  ////////////////////////////////////////////////////
  return (
    <div>
      <Dialog
        fullScreen
        className={classes.Dialouge}
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box style={{ marginTop: '70px' }}>
          <Box
            display="flex"
            justifyContent="flex-end"
            style={{ paddingBottom: '28px' }}
          >
            <IconButton>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
          <Box pl={3}>
            {' '}
            <Typography variant="h3">Select a destination</Typography>
          </Box>
        </Box>

        <Box> {getStepContent(activeStep)}</Box>
        <div style={{ flexGrow: 1 }} />
        <Paper
          style={{
            height: '30vh',
            width: '100%',
            background: '#F5F0E4'
          }}
        >
          <Box
            style={{ width: '100%', gap: '1rem', paddingTop: '32px' }}
            display="flex"
            justifyContent="center"
          >
            <Button
              className={classes.Button1}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>

            <Button
              onClick={handleNext}
              className={classes.Next}
              color="primary"
              //   className={clsx(classes.Calenderbefore, {
              //     [classes.Calender]: fexible
              //   })}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Dialog>
    </div>
  );
}
