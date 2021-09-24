import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import BannerSection from '@components/BannerSection';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Blogs = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <BannerSection
        {...props}
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter Blogs, special offers and more…"
      />
    </Box>
  );
};

export default Blogs;
