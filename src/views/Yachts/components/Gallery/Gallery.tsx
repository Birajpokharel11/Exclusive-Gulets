import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { data } from '@mocks/_galleryMock';

import GalleryItem from './components/GalleryItem';
import PaginationSection from './components/PaginationComponents';

export default function Gallery({ handleDrawerOpen }) {
  return (
    <Box component="section">
      <Grid container>
        {data.map((item, i) => (
          <Grid item md={4} sm={6} xs={12} lg={3} xl={2} key={i}>
            <GalleryItem i={i} handleDrawerOpen={handleDrawerOpen} {...item} />
          </Grid>
        ))}
      </Grid>
      <PaginationSection />
    </Box>
  );
}
