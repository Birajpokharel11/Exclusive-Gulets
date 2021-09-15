/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  withStyles
} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepButton,
  StepConnector,
  StepIcon,
  StepLabel,
  Hidden,
  Paper
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import underLine from 'public/assets/images/smallBlueUnderline.svg';
import Guest from 'public/assets/images/heroYatch.png';
import Location from 'public/assets/images/Location.svg';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const StyleConnector = withStyles({
  active: {
    '& $line': {
      borderColor: 'transparent'
    }
  },
  completed: {
    '& $line': {
      borderColor: 'transparent'
    }
  },
  line: {
    borderColor: 'transparent',
    borderTopWidth: 0,
    borderRadius: 1
  }
})(StepConnector);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#F5F0E4'
    },
    Yatch: {
      width: '100%',
      height: ' 671px'
    },
    buttonStyle: {
      backgroundColor: '#2A398D',
      color: '#FFFFFF',
      marginBottom: '4rem'
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    connectorLine: {
      borderTopWidth: '999px'
    },
    stepIconRoot: {
      color: 'pink',
      '&.MuiStepIcon-active': {
        color: 'red'
      },
      '&.MuiStepIcon-completed': {
        color: 'green'
      }
    }
  })
);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    place: 'Dolin',
    country: 'Croatia',
    description:
      'DOLIN is a beautifully maintained, 27-meter gulet which was built in 1946 and fully refitted in 2019. DOLIN offers a highly enjoyable and great value for money yacht charter experience for up to 10...',
    feedback:
      'We had a wonderful week on the Gulet Dolin. Everyone agreed it was the experience of a lifetime and we will be recommending it to our friends in New Zealand and Australia.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    place: 'Nautilus I',
    country: 'Croatia',
    description:
      'NAUTILUS is a 31-meter gulet built in 1998 and was more recently refitted in 2015 meaning she has fairly up to date furnishings and facilities, she offers a brilliant yacht charter experience ...',
    feedback:
      'We had a wonderful week on the Gulet Dolin. Everyone agreed it was the experience of a lifetime and we will be recommending it to our friends in New Zealand and Australia.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    place: 'Nevijana',
    country: 'Croatia',
    description:
      'NAVIJANA is a 13-meter gulet built in 1957 and much more recently refitted in 2017, she offers a very enjoyable yacht charter experience, great for a romantic getaway for up to 7 guests in total. S...',
    feedback:
      'We had a wonderful week on the Gulet Dolin. Everyone agreed it was the experience of a lifetime and we will be recommending it to our friends in New Zealand and Australia.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    place: 'Elite',
    country: 'Caribbean',
    description:
      'ELITE is a stunning motor yacht sailing in Caribbean. She was built in the year 2016 which tastefully decorated and in immaculate condition. She boasts panoramic views that are provided by uni...',
    feedback:
      'We had a wonderful week on the Gulet Dolin. Everyone agreed it was the experience of a lifetime and we will be recommending it to our friends in New Zealand and Australia.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    place: 'ECE ARINA',
    country: 'Greece',
    description:
      'ECE ARINA is a well maintained and beautiful 24-meter gulet which was built in 2013 and re-fit in the year 2019. She offers a highly enjoyable yacht charter experience for a group of...',
    feedback:
      'We had a wonderful week on the Gulet Dolin. Everyone agreed it was the experience of a lifetime and we will be recommending it to our friends in New Zealand and Australia.',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  }
];

export default function YatchSlider() {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const StepIcon = ({ ownerState }) => (
    <div
      style={{
        position: 'relative',
        height: '8px',
        width: '100px',
        backgroundColor: ownerState.active ? '#2A398D' : '#ffffff',
        borderRadius: '4px'
      }}
    />
  );

  function ColorlibStepIcon(props) {
    const { active, completed } = props;

    return <StepIcon ownerState={{ completed, active }} />;
  }

  return (
    <Box component="section" maxWidth="false" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: '3rem' }}
      >
        <Grid item xs={12}>
          <Typography color="textPrimary" align="center" variant="h2">
            Loved by our Guests
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" xs={12}>
          <Image src={underLine} alt="underline" />
        </Grid>
        <Grid item>
          <Typography align="center" color="textPrimary" variant="subtitle1">
            Recently Confirmed Charters
          </Typography>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.place}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item container md={6} xs={12} direction="column">
                    <Grid item>
                      <Typography color="primary" variant="h5">
                        {step.place}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="primary">{step.country}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="primary">
                        {step.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        className={classes.buttonStyle}
                      >
                        View Details
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography color="primary">
                        “Thank you all so so so much for all of your help and
                        patience with getting through this kosher week. My
                        family had the best trip of their lives so I take my hat
                        off to you all. Please pass on my sincere thanks also to
                        Captain Askin and his team who I know showed patience
                        and professionalism throughout what was no doubt a very
                        challenging week.”
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="primary">Yasmin, Israel</Typography>
                    </Grid>
                  </Grid>

                  <Grid item container md={6} xs={12} justifyContent="center">
                    <Image src={Guest} alt="guest" />
                  </Grid>
                </Grid>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <Grid container>
          <Hidden smDown>
            <Grid item container xs={2}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                <KeyboardArrowLeft />
                Back
              </Button>
            </Grid>
          </Hidden>

          <Grid item xs={8}>
            <Stepper
              alternativeLabel
              nonLinear
              activeStep={activeStep}
              connector={<StyleConnector />}
              style={{ backgroundColor: '#F5F0E4' }}
            >
              {tutorialSteps.map((step, index) => {
                const stepProps = {};
                const buttonProps = {};

                return (
                  <Step key={index} {...stepProps}>
                    {/* <StepButton icon={<StepIcon />} {...buttonProps}>
                        {step.place}
                      </StepButton> */}
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {step.place}
                    </StepLabel>

                    <Typography variant="body1" align="center">
                      <Image src={Location} alt="location" /> {step.country}
                    </Typography>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Hidden smDown>
            <Grid item container justifyContent="flex-end" xs={2}>
              <Button
                color="primary"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
}
