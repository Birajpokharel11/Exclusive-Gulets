import React from 'react';
import Slider from 'react-slick';

const ImgSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    className: 'center',
    centerMode: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesPerRow: 1,
    initialSlide: 0,
    focusOnSelect: true,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesPerRow: 1
        }
      }
    ],
    beforeChange: (current, next) =>
      this.setState({
        oldSlide: current,
        activeSlide: next === -1 ? 0 : next
      }),
    afterChange: (current) => this.setState({ activeSlide2: current })
  };

  return (
    <section id="destination-carousel" className="slider_desitnation">
      <div className="container-fluid">
        <div className="row desktop-slider">
          {!!featured_destination.attachments?.length && (
            <div className="col-lg-12 col-md-12 no-padding">
              <div className="slider_with_center_bottoms">
                <Slider {...settings}>
                  {featured_destination.attachments.map((image, i) => (
                    <div key={image.file.slider.url}>
                      <img
                        alt="img responsive"
                        src={image.file.slider.url}
                        className="img-responsive"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <h4 className="desti_pagin desti_pagination">
                {this.state.activeSlide < 0 ? 1 : this.state.activeSlide + 1} /{' '}
                {featured_destination.attachments.length}
              </h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImgSlider;
