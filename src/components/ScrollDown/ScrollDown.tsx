import React from 'react';

import { smoothScroll } from '../../utils/smoothScroll';

import bannerarow from '../../assets/images/icons/banner-arrow.png';

export const ScrollDown = props => {
  const { id } = props;

  const scrollToId = () => {
    smoothScroll.scrollToElementById(id);
  };

  return (
   <div className="arrow-down" onClick={scrollToId}>
     <p className="scroll-text">Scroll Down</p>
     <img src={bannerarow} className="img-responsive" alt="button arrow" />
   </div>
  );
};

export default ScrollDown;
