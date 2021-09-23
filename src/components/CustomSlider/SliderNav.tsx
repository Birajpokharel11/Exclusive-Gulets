import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';

import PrevButton from '@components/PrevButton';
import NextButton from '@components/NextButton';
import Location from '@components/icons/Location';

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

const useStyles = makeStyles((theme) => ({
  navBtn: {
    position: 'absolute',
    top: '45%',
    transform: 'translateY(-50%)',
    zIndex: 999
  },
  navLeft: {
    left: '10px'
  },
  navRight: {
    right: '10px'
  }
}));

function getCountryStr(countryList, countryListLength) {
  return countryList.map((country, i) => {
    return countryListLength === i + 1
      ? `${country.name}`
      : `${country.name}, `;
  });
}

interface Props {
  sliderRef: React.RefObject<Slider>;
  data: any[];
  activeSlideIndex: number;
}

const SliderNav: React.FC<Props> = ({ sliderRef, data, activeSlideIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { slickPrev, slickNext, slickGoTo } = sliderRef?.current;

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <PrevButton
          className={
            matches ? undefined : clsx(classes.navBtn, classes.navLeft)
          }
          type={matches ? 'button' : 'icon'}
          onClick={() => slickPrev()}
        />
      </Grid>
      <Grid item>
        <Stepper
          alternativeLabel
          nonLinear
          activeStep={activeSlideIndex}
          connector={<StyleConnector />}
          style={{ backgroundColor: '#F5F0E4' }}
        >
          {data.map((step, index) => {
            const stepProps = {};
            const buttonProps = {};

            return (
              <Step key={index} {...stepProps}>
                <StepButton {...buttonProps} onClick={() => slickGoTo(index)}>
                  <Hidden smDown>
                    <Typography variant="h5">{step.place}</Typography>

                    <Typography variant="body1" align="center">
                      <Location style={{}} />
                      {step.country}
                      {/* {getCountryStr(
                        step.sailing_countries,
                        step.sailing_countries.length
                      )} */}
                    </Typography>
                  </Hidden>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid item>
        <NextButton
          className={
            matches ? undefined : clsx(classes.navBtn, classes.navRight)
          }
          type={matches ? 'button' : 'icon'}
          onClick={() => {
            if (data.length - 1 === activeSlideIndex) {
              setTimeout(() => slickGoTo(0), 500);
              return;
            }
            slickNext();
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SliderNav;
