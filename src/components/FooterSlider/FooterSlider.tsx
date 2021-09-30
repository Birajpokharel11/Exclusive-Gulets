import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Divider, Grid } from '@material-ui/core';
import Slider from 'react-slick';

import Typography from '@modules/components/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  footerSlider: {
    position: 'relative',

    '& .slick-slide.slide-center': {
      minHeight: '368px',
      marginTop: '-92px',
      marginBottom: '-92px',
      opacity: '.75'
    }
  },
  inner: {
    padding: '0 15px'
  },
  sliderHover: {
    position: 'relative'
  },
  bgImage: {
    transition: 'transform .5s,-webkit-transform .5s',
    marginBottom: 0,
    height: '400px',
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      maxWidth: '100%',
      transition: 'all 1s ease',
      marginBottom: '25px'
    }
  },
  dropShadow: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: 0,
      background:
        'linear-gradient(180deg,rgba(7,21,41,0) 54.17%,rgba(7,21,41,.83) 86.98%)',
      paddingBottom: '30px',
      width: '100%'
    }
  },
  quoteDetails: {
    padding: '0 20px',
    position: 'relative',
    bottom: '30px'
  },
  footerVector: {
    position: 'absolute',
    width: '15%',
    bottom: 0,
    left: 0
  }
}));

export const FooterSlider = ({ yachts }) => {
  const classes = useStyles();

  const settings = {
    className: classes.footerSlider,
    centerMode: true,
    infinite: true,
    // lazyLoad: true,
    focusOnSelect: true,
    cssEase: 'ease',
    touchMove: true,
    waitForAnimate: true,
    centerPadding: '0',
    slidesToShow: 4,
    initialSlide: 2,
    autoplay: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false
        }
      }
    ]
  };

  return (
    <Box component="section" id="yachts-carousel">
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={4}>
            <Typography variant="h2">Yachts for any destination</Typography>
            <Typography variant="h2">
              Accessible and fun at affordable prices
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Slider {...settings}>
              {yachts.map((yacht, index) => (
                <Box key={index} className={classes.inner}>
                  <div className={classes.sliderHover}>
                    <div
                      style={{
                        minHeight: '184px',
                        backgroundImage: yacht.main_image.search_thumb.url
                          ? `url("${yacht.main_image.search_thumb.url}")`
                          : `url("/assets/images/yachts/image-13.png")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundClip: 'border-box',
                        backgroundPosition: 'center center'
                      }}
                      className={classes.bgImage}
                    />
                    <div className={classes.dropShadow}>
                      <div className={classes.quoteDetails}>
                        <Typography variant="h2">{yacht.name}</Typography>
                        <Typography>
                          {yacht.length} m / {Math.round(yacht.length * 3.28)}{' '}
                          ft | {yacht.type ? yacht.type.name : ''} |{' '}
                          {yacht.build_year}
                        </Typography>
                        <div className="quote_link-ftr">
                          <span className="quote_pa">
                            <a
                              href={'/yachts/' + yacht.slug}
                              className="getaqut"
                            >
                              Discover More{' '}
                              <img
                                src="/assets/images/icons/button-arrow-yellow.svg"
                                className="quote_orange"
                              />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.footerVector}>
        <img
          src="/assets/images/icons/footer vector.svg"
          className="img-responsive"
          alt="Footer vector"
        />
      </Box>
      <Divider />
    </Box>
  );
};

export default FooterSlider;
