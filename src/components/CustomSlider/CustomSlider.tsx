import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';

import SilderItem from './SilderItem';
import SliderNav from './SliderNav';

interface Props {
  sliderData: any[];
}

const CustomSlider = ({ sliderData }: Props) => {
  // constants
  const INITAL_SLIDE = 0;
  const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    className: 'home-slick',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: INITAL_SLIDE,
    beforeChange: (current, next) => {
      setActiveSlideIndex(next);
      detectChangeOnLastItem(current, next);
    }
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(INITAL_SLIDE);
  const sliderRef = useRef<Slider>(null);

  const detectChangeOnLastItem = (oldIndex, newIndex) => {
    if (oldIndex === sliderData.length - 1 && newIndex === 0) {
      setTimeout(() => sliderRef.current.slickGoTo(0), 500);
      return;
    }
  };

  return (
    <>
      <Slider {...slickSettings} ref={sliderRef}>
        {sliderData.map((item) => (
          <SilderItem key={item.id} {...item} />
        ))}
      </Slider>

      {sliderData.length && sliderRef.current && (
        <SliderNav
          sliderRef={sliderRef}
          data={sliderData}
          activeSlideIndex={activeSlideIndex}
        />
      )}
    </>
  );
};

export default CustomSlider;
