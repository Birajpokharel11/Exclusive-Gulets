import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';

import BannerSection from '@components/BannerSection';
import CardList from '@components/CardList';

import container from './Blogs.container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: 0
    }
  })
);

const Destinations = (props) => {
  const classes = useStyles();

  const {
    destination: { loading, destinations },
    posts: { postsList }
  } = props;

  return (
    <Box>
      <BannerSection
        {...props}
        title="NEWS & BLOGS"
        description="Keep up to date with our latest yachting news, charter destinations, special offers and more…"
      />

      <section
        id="other-gems"
        style={{ paddingTop: this.state.height + 40 + 'px' }}
        className="section fix other-gems wow slideInUp"
        data-wow-duration="1s"
      >
        <BackgroundVectors />
        <div className="container">
          <div className="row">
            <div className="banner-bottom-description mb-4">
              <p>{blog?.fields?.single_subheading}</p>
            </div>
          </div>
          <div className="row">
            {posts
              ?.filter((post) => post.title.toLowerCase() !== 'dining')
              ?.map((post) => (
                <Link
                  to={`/blogs/${post.slug}`}
                  key={post.slug}
                  className="col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="gems">
                    <div className="gems-img">
                      <img
                        src={post.featured_image.slider.url}
                        className="img-responsive"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <p className="title">{post.title}</p>
                      <p className="txt">{parse(post.description)}</p>

                      <p className="date">
                        {new Date(post.created_at).getDate()} /{' '}
                        {new Date(post.created_at).getMonth() + 1} /{' '}
                        {new Date(post.created_at).getFullYear()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            {!!next_page && (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="load-moregems">
                  <div className="gems-content" style={{ textAlign: 'center' }}>
                    <p className="title">
                      Discover more
                      <br />
                      Blogs
                    </p>
                    <p className="txt">Go on... be curious</p>
                    <Button
                      className="blue_btn"
                      withButtonCustomStyle={false}
                      title="More"
                      onClick={this.handlePagination}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <FooterSlider />
    </Box>
  );
};

export default container(Destinations);
