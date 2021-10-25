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
        margin: '0% 3%'
      }
    }
  })
);

interface Props {
  Dining?: any[];
  loading?: any;
}
function Dining({ Dining, loading }) {
  const classes = useStyles();
  console.log('Dinnisng', Dining);
  return (
    <>
      <BannerSection
        backgroundImage={Dining?.featured_image?.url}
        title={Dining?.title}
        description={Dining?.description}
      />
      <Box component="section" className={classes.sectionGem}>
        <BackgroundVectors />
        <Box className={classes.Box}>
          <Description
            content={Dining?.content}
            SideImage={Dining?.side_image?.url}
            individual={Dining}
          />
        </Box>
      </Box>
      {/* <FooterSlider /> */}
    </>
  );
}

export default container(Dining);
