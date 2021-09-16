import { useRef } from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
      padding: '1rem'
    }
  })
);

const CardWithSlider = ({ cardsData }: Props) => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  let slickSettings: Settings = {
    infinite: true,
    speed: 500,
    className: classes.carouselStyle,
    centerPadding: '30px'
  };
  if (matchesMD)
    slickSettings = {
      ...slickSettings,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      slidesToShow: 2,
      slidesToScroll: 1
    };
  if (matchesSM)
    slickSettings = {
      ...slickSettings,
      dots: true,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  // ref
  const sliderRef = useRef(null);

  const mapGridCards = () => {
    return cardsData.map((card) => (
      <Grid item style={{ padding: '1rem' }} md={4} key={card.id}>
        <MediaCard {...card} />
      </Grid>
    ));
  };

  const mapSliderCards = () => {
    return cardsData.map((card) => <MediaCard key={card.id} {...card} />);
  };

  return (
    <Box>
      {matchesMD ? (
        <Grid container>{cardsData.length ? mapGridCards() : null}</Grid>
      ) : (
        <Slider {...slickSettings} ref={sliderRef}>
          {cardsData.length ? mapSliderCards() : null}
        </Slider>
      )}
    </Box>
  );
};

export default CardWithSlider;
