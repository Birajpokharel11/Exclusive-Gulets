import React from 'react';
import { Box, Container } from '@material-ui/core';

const Fantasy = ({ item }) => {
  return (
    <Box component="section">
      <Container>
        <div className="row">
          <div className="banner-bottom-description" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="fantasyland-content">
              <h1>{item.heading}</h1>
              <p>{item.intro_content}</p>
              <p className="destina_p_secpara">{item.intro_content_2}</p>
            </div>
            <div className="post-author" id="author_destinatoin">
              <div className="avatar">
                <img
                  src="/assets/images/yachts/image-11.png"
                  className="img-responsive"
                  alt="avtar"
                />
              </div>
              <p className="desc">{item.testimonial}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="fantasyland-img" id="fantan_desktop">
              <img
                src={item?.side_image?.side_image?.url}
                alt="fantsyland"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        className="background-vector offer-news-vector"
        id="destination_vctr1"
      >
        <img
          src="/assets/images/Blog/blog-vector2.svg"
          className="img-responsive"
          alt="Background vector art"
        />
      </div>
    </Box>
  );
};

export default Fantasy;
