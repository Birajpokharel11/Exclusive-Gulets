import React from 'react';
import Box from '@material-ui/core/Box';

import Banner from '@components/Banner';

import Fantasy from './components/Fantasy';
import ImgSlider from './components/ImgSlider';
import Content from './components/Content';
import YatchsRecommend from './components/YatchsRecommend';
import Recommendation from './components/Recommendation';

const DestinationsDetails = (props) => {
  return (
    <Box>
      <Banner />

      {/* Second section */}
      <Fantasy />

      {/* Slider section */}
      <ImgSlider />

      {/* Third section */}
      <Content />

      {!!yachts.length && <YatchsRecommend />}

      <Recommendation />
    </Box>
  );
};

export default DestinationsDetails;
