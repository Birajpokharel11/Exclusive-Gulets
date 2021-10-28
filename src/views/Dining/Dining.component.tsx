import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';
import container from './Dinning.container';
import BackgroundVectors from '@components/BackgroundVectors';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { IPostState } from '@store/interfaces';
import Description from './components/Description';

import YachtsSlider from '@views/Yachts/components/PreviewDrawer/components/YachtsSlider';
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
  dining?: any;
  loading?: any;
  slider_image?: any[];
}

function Dining(props) {
  const classes = useStyles();

  const { dining, loading, slider_image }: Props = props;

  return (
    <>
      <BannerSection
        backgroundImage={dining?.featured_image?.url}
        title={dining?.title}
        description={dining?.description}
        withSocial={true}
      />
      <Box component="section" className={classes.sectionGem}>
        <div className={classes.Vctors}>
          <BackgroundVectors />
        </div>

        <Box className={classes.Box}>
          <Description
            content={dining?.content}
            SideImage={dining?.side_image?.url}
            individual={dining}
          />
        </Box>
      </Box>
      <Box style={{ paddingBottom: '100px' }}>
        <YachtsSlider imageList={slider_image} />
      </Box>
      {/* <FooterSlider /> */}
    </>
  );
}

export default container(Dining);
