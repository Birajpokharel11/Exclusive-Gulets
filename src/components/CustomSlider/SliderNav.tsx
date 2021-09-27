import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';

import PrevButton from '@modules/components/PrevButton';
import NextButton from '@modules/components/NextButton';

import CustomStepper from './CustomStepper';

const useStyles = makeStyles((theme) => ({
  sliderNav: {
    '@media (min-width: 767px)': {
      gridTemplateColumns: '10% auto 10%'
    }
  },
  sliderThumb: {
    display: 'grid',
    gridGap: '9px',
    cursor: 'pointer'
  },
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
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.sliderNav}
    >
      <Grid item md={1} sm={2} xs={1}>
        <PrevButton
          className={
            matches ? undefined : clsx(classes.navBtn, classes.navLeft)
          }
          type={matches ? 'button' : 'icon'}
          onClick={() => slickPrev()}
        />
      </Grid>
      <Grid item md sm xs>
        <Box
          style={{
            gridTemplateColumns: `repeat(${data.length}, 1fr)`
          }}
          className={classes.sliderThumb}
        >
          {data.map((item, i) => {
            return (
              <CustomStepper
                key={i}
                onClick={() => slickGoTo(i)}
                active={activeSlideIndex === i}
                fulfilled={activeSlideIndex > i}
                item={item}
              />
            );
          })}
        </Box>
      </Grid>
      <Grid item container justifyContent="flex-end" md={1} sm={2} xs={1}>
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
