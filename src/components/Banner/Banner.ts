import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Socials from '../Socials';
import ScrollDown from '../ScrollDown/';

export const Banner = (props) => {
  const {
    title,
    children,
    withSocial,
    withScroll,
    bgImageUrl,
    bottomTitle,
    description,
    bottomSubTitle
  } = props;

  return (
    <div className="hero-slider section destination-hero">
      {props.createBreadcrumbs &&
        props.createBreadcrumbs({
          breadcrumbName: props.breadcrumbName ? props.breadcrumbName : null,
          theme: 'dark'
        })}

      <div
        id="destination_pg"
        style={{
          backgroundColor: '#091527',
          backgroundImage: `url(${bgImageUrl})`
        }}
        className="hero-item HRO_SEC"
      >
        <div className="slider-dark-overlay" />
        {(title || description) && (
          <div className="container">
            <div className="row">
              <div className="hero-content-wrap col">
                <div className="hero-content destination-content">
                  <div className="row">
                    <div className="col-lg-7 col-md-6 col order-2 order-lg-1">
                      <div className="des-content-hero">
                        <h1>{title}</h1>
                        <p className="sec_destinatom_p">{description}</p>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 order-1 order-lg-2 video-margin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!!withScroll && <ScrollDown id={withScroll} />}
        {withSocial && <Socials />}
        {children}
        <div className="overlay-wrapper">
          {!!bottomTitle && !!bottomSubTitle && (
            <div className="blog_overlay">
              <div className="container">
                <h1>{bottomTitle}</h1>
                <div className="separator" />
                <p dangerouslySetInnerHTML={{ __html: bottomSubTitle }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  withSocial: PropTypes.bool,
  withScroll: PropTypes.string,
  bgImageUrl: PropTypes.string,
  description: PropTypes.string,
  findOutSize: PropTypes.func
};

Banner.defaultProps = {
  title: '',
  children: null,
  withSocial: false,
  withScroll: '',
  bgImageUrl: '',
  description: '',
  findOutSize: () => null
};
