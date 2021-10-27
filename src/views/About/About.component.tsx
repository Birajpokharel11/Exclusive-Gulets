import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import BannerSection from '@components/BannerSection';
import container from './About.container';
import Description from './components/Description';
interface Props {
  charter_content?: any | object;
  general_content?: any | object;
  charter_images?: any | object;
}
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
    sectionGem: {},
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

function About({ charter_content, general_content, charter_images }: Props) {
  const classes = useStyles();
  const slider = [];

  console.log('About', charter_content?.name);
  return (
    <>
      <BannerSection
        why={charter_content?.name}
        backgroundImage={charter_images.image_1?.url}
        title={charter_content?.fields?.heading}
        description={charter_content?.fields?.subheading}
        withSocial={true}
        about="about"
      />
      <Box component="section">
        <Description
          heading={charter_content?.fields?.charter_heading_1}
          description={charter_content?.fields?.charter_description_1}
          BottomLine={charter_content?.fields?.charter_bottom_line_1}
          backgroundImage={charter_images?.image_2.url}
        />
        <Description
          heading={charter_content?.fields?.charter_heading_2}
          description={charter_content?.fields?.charter_description_2}
          BottomLine={charter_content?.fields?.charter_bottom_line_2}
          backgroundImage={charter_images?.image_3.url}
        />
        <Description
          heading={charter_content?.fields?.charter_heading_2}
          description={charter_content?.fields?.charter_description_2}
          BottomLine={charter_content?.fields?.charter_bottom_line_2}
          backgroundImage={charter_images?.image_4.url}
        />
      </Box>

      {/* <FooterSlider /> */}
    </>
  );
}

export default container(About);
