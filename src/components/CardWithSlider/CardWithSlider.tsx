import { useEffect, useState, useRef } from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Slider, { Settings } from 'react-slick';

import NextArrow from '@modules/icons/NextArrow';
import PrevArrow from '@modules/icons/PrevArrow';
import MediaCard from './MediaCard';

interface Card {
  id: string;
  yacht_slug?: string;
  slug?: string;
  title?: string;
  description?: string;
}

interface Props {
  cardsData: Card[];
  redirectDetailsPage?: any;
  viewOffer?: string;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    carouselStyle: {
      position: 'relative',

      '& .slick-list': {
        [theme.breakpoints.up('sm')]: {
          margin: '0 2em'
        },

        '& .slick-track': {
          display: 'flex'
        },

        '& .slick-slide': {
          [theme.breakpoints.up('sm')]: {
            padding: '0 15px'
          }
        }
      }
    }
  })
);

const CardWithSlider = ({
  cardsData,
  redirectDetailsPage,
  viewOffer = 'Read More'
}: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const slickSettings: Settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    className: classes.carouselStyle,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
        }
      },
      {
        breakpoint: 675,
        settings: {
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />
        }
      }
    ]
  };

  // ref
  const sliderRef = useRef<Slider>(null);

  const getColsSize = () => {
    if (cardsData.length === 3) return 4;
    if (cardsData.length === 2) return 6;
    return undefined;
  };

  const mapGridCards = () => {
    const md = getColsSize();
    return cardsData.map((card) => (
      <Grid item style={{ padding: '1rem' }} md={md} key={card.id}>
        <MediaCard
          redirectDetailsPage={redirectDetailsPage}
          viewOffer={viewOffer}
          {...card}
        />
      </Grid>
    ));
  };

  const mapSliderCards = () => {
    return cardsData.map((card) => (
      <MediaCard
        redirectDetailsPage={redirectDetailsPage}
        key={card.id}
        {...card}
      />
    ));
  };

  return (
    <Box>
      <Hidden mdUp>
        <Slider {...slickSettings} ref={sliderRef}>
          {cardsData.length ? mapSliderCards() : null}
        </Slider>
      </Hidden>
      <Hidden smDown>
        <Grid container>{cardsData.length ? mapGridCards() : null}</Grid>
      </Hidden>
    </Box>
  );
};

export default CardWithSlider;
