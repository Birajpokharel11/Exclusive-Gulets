import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Container } from '@material-ui/core';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';
import container from './Blogs.container';
import Image from 'next/image';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const BlogsDetails = (props) => {
  const classes = useStyles();

  const {
    blogs: { loading, blogs }
  } = props;

  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
        {...props}
      />
      <BackgroundVectors />
      {loading && <CircularProgress />}
      {/* // ) : (
        // <Box component="section">
        //   <Container>
        //     <Box mb={4}>
        //       <Typography>{blog?.fields?.single_subheading}</Typography>
        //     </Box>
        //     <CardList list={postsList} />
        //   </Container>
        // </Box> */}
      {/* )} */}

      {/* <FooterSlider /> */}
    </Box>
  );
};

export default container(BlogsDetails);
