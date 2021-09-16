import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

function getCountryStr(countryList, countryListLength) {
  return countryList.map((country, i) => {
    return countryListLength === i + 1
      ? `${country.name}`
      : `${country.name}, `;
  });
}

const SliderNav = ({ ref, data, activeSlideIndex }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const { slickPrev, slickNext, slickGoTo } = ref.current;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container justify="space-around">
        <Grid item>
          <Button
            color="secondary"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => slickPrev()}
          >
            Prev
          </Button>
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
                    <Typography variant="h5">{step.name}</Typography>

                    <Typography variant="body1" align="center">
                      <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8337 7.49935C10.8337 6.84008 10.6382 6.19561 10.2719 5.64745C9.90562 5.09929 9.38503 4.67204 8.77594 4.41975C8.16685 4.16746 7.49663 4.10145 6.85003 4.23007C6.20342 4.35868 5.60948 4.67615 5.1433 5.14233C4.67713 5.6085 4.35966 6.20245 4.23104 6.84905C4.10243 7.49565 4.16844 8.16588 4.42073 8.77496C4.67302 9.38405 5.10026 9.90464 5.64843 10.2709C6.19659 10.6372 6.84106 10.8327 7.50033 10.8327C8.38438 10.8327 9.23223 10.4815 9.85735 9.85637C10.4825 9.23125 10.8337 8.38341 10.8337 7.49935ZM7.50033 9.16602C7.17069 9.16602 6.84846 9.06827 6.57438 8.88513C6.3003 8.702 6.08667 8.4417 5.96053 8.13716C5.83438 7.83261 5.80138 7.4975 5.86568 7.1742C5.92999 6.8509 6.08873 6.55393 6.32182 6.32084C6.5549 6.08775 6.85188 5.92902 7.17518 5.86471C7.49848 5.8004 7.83359 5.8334 8.13813 5.95955C8.44268 6.0857 8.70297 6.29932 8.88611 6.5734C9.06925 6.84748 9.16699 7.16971 9.16699 7.49935C9.16699 7.94138 8.9914 8.3653 8.67884 8.67786C8.36628 8.99042 7.94235 9.16602 7.50033 9.16602Z"
                          fill="#2A398D"
                        />
                        <path
                          d="M7.5 20C7.70256 19.9997 7.89808 19.9256 8.05 19.7917C8.33333 19.5417 15 13.6417 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 2.96403e-08 5.51088 0 7.5C0 12.7833 6.66667 19.475 6.90833 19.7583C6.9862 19.8356 7.07855 19.8967 7.18008 19.9381C7.28161 19.9796 7.39033 20.0006 7.5 20ZM7.5 1.66667C9.0471 1.66667 10.5308 2.28125 11.6248 3.37521C12.7188 4.46917 13.3333 5.9529 13.3333 7.5C13.3333 11.9 9.10833 16.45 7.5 17.9917C5.94167 16.325 1.66667 11.325 1.66667 7.5C1.66667 5.9529 2.28125 4.46917 3.37521 3.37521C4.46917 2.28125 5.9529 1.66667 7.5 1.66667Z"
                          fill="#2A398D"
                        />
                      </svg>{' '}
                      {getCountryStr(
                        step.sailing_countries,
                        step.sailing_countries.length
                      )}
                    </Typography>
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            startIcon={<ArrowForwardIosIcon />}
            onClick={() => {
              if (data.length - 1 === activeSlideIndex) {
                setTimeout(() => slickGoTo(0), 500);
                return;
              }
              slickNext();
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface Props {
  ref?: any;
  data?: any[];
  activeSlideIndex?: number;
}

export default SliderNav;
