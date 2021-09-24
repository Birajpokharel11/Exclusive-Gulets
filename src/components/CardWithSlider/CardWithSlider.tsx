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

import NextArrow from '@components/icons/NextArrow';
import PrevArrow from '@components/icons/PrevArrow';
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
}

const useStyles = makeStyles((theme) =>
  createStyles({
    carouselStyle: {
      position: 'relative',

      '& .slick-list': {
        [theme.breakpoints.up('sm')]: {
          margin: '0 2em'
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

const CardWithSlider = ({ cardsData }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  console.log({ matchesSM, matchesXS });

  const [slickSettings, setSlickSettings] = useState({});

  useEffect(() => {
    let slickSettings: Settings = {
      infinite: true,
      speed: 500,
      className: classes.carouselStyle,
      centerPadding: '30px'
    };
    if (matchesSM) {
      slickSettings = {
        ...slickSettings,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    }

    if (matchesXS) {
      slickSettings = {
        ...slickSettings,
        dots: true,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    }
    setSlickSettings(slickSettings);
  }, [matchesSM, matchesXS]);

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
        <MediaCard {...card} />
      </Grid>
    ));
  };

  const mapSliderCards = () => {
    return cardsData.map((card) => <MediaCard key={card.id} {...card} />);
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
