import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';

import BackgroundVectors from '@components/BackgroundVectors';

import Description from '@views/Dining/components/Description';
import YachtsSlider from '@views/Yachts/components/PreviewDrawer/components/YachtsSlider';

import container from './WhyCharter.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    },
    heading: {
      color: '#00204e',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '28px'
    },
    sectionGem: {
      minHeight: '40vh',
      paddingTop: '40px',
      marginBottom: '20px',
      position: 'relative'
    },
    Box: {
      margin: '0% 21%',
      [theme.breakpoints.down('lg')]: {
        margin: '0% 12%'
      },
      [theme.breakpoints.down('md')]: {
        margin: '0% 8%'
      }
    },
    Vctors: {
      [theme.breakpoints.down(700)]: {
        display: 'none'
      }
    }
  })
);
interface Files {
  url?: URL;
}
interface Slider {
  id?: number;
  file?: Files;
}
interface Props {
  Dining?: any[];
  loading?: any;
  slider_image?: Slider;
}
function Dining({ Dining, loading, slider_image }) {
  const classes = useStyles();
  const slider = [];
  slider_image.map((image, index) => {
    slider.push(image);
  });

  console.log('Dinnisng', slider);
  return (
    <>
      <BannerSection
        backgroundImage={Dining?.featured_image?.url}
        title={Dining?.title}
        description={Dining?.description}
        withSocial={true}
      />
      <Box component="section" className={classes.sectionGem}>
        <div className={classes.Vctors}>
          <BackgroundVectors />
        </div>

        <Box className={classes.Box}>
          <Description
            content={Dining?.content}
            SideImage={Dining?.side_image?.url}
            individual={Dining}
          />
        </Box>
      </Box>
      <Box style={{ paddingBottom: '100px' }}>
        <YachtsSlider imageList={slider} />
      </Box>
      {/* <FooterSlider /> */}
    </>
  );
}

export default container(Dining);
