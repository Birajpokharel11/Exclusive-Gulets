import React from 'react';
import Box from '@material-ui/core/Box';

import Banner from '@components/Banner';
import ContentSection from '@components/ContentSection';
import DestinationsGallerySection from '@components/DestinationsGallerySection';
import YahtsSlider from '@components/YachtSlider';

import { Images } from '@mocks/_destinationMocks';

const Blogs = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Banner
        findOutSize={this.getBannerHeight}
        bgImageUrl={post.featured_image?.featured?.url}
        bottomTitle={post.title}
        bottomSubTitle={post.description}
        breadcrumbName={post.title}
      />

      {/* Second section  */}
      <ContentSection
        post={post}
        general_content={this.state.general_content}
      />

      {/* Third Section  */}
      <YahtsSlider
        title="Perfect Yachts for this Experience"
        subtitle="An unforgettable holiday of your life"
      />

      <DestinationsGallerySection
        title="Perfect Location Matches Perfect Experience"
        subtitle="Perfect location and the perfect yacht for your ultimate charter experience.
           There is no better way than chartering a luxury gulet or yacht to see more of the world.
            With two third of the Earth covered in water,
           there is always a new exciting destination to explore and a different shoreline to discover.​"
        destinations={Images}
      />

      {/* Fourth Section  */}
      <CardSection
        title="Related Blogs"
        cardsData={this.props.related_posts}
        bgColor="#F5F0E4"
        subtitle="We thought that you might also like the content below, enjoy!"
      />

      {/* <MobileForm /> */}
      <EnquireFormMobileWrapper smallContainerWidth={true} />
    </Box>
  );
};

export default Blogs;
