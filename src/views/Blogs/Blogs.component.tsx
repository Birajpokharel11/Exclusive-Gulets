import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Container } from '@material-ui/core';

import Typography from '@modules/components/Typography';

import BannerSection from '@components/BannerSection';
import BackgroundVectors from '@components/BackgroundVectors';
import CardList from '@components/CardList';
import FooterSlider from '@components/FooterSlider';

import container from './Blogs.container';

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
    blogs: { loading },
    posts: { postsList }
  } = props;

  return (
    <Box>
      <BannerSection
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
        {...props}
      />

      <Box component="section">
        <BackgroundVectors />
        <Container>
          <Box mb={4}>
            <Typography>{blog?.fields?.single_subheading}</Typo>
          </Box>
          <CardList list={postsList} />
        </Container>
      </Box>
      <FooterSlider />
    </Box>
  );
};

export default container(BlogsDetails);
