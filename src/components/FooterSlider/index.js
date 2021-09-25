import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import * as SC from './StyledFooterSlide';

import vectoelast from '../../assets/images/icons/footer vector.svg';
import buttonarrow from '../../assets/images/icons/button-arrow-yellow.svg';
import destination1 from '../../assets/images/yachts/image-13.png';

export class FooterSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yachts: []
    };
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/yachts/yachts_for_destination.json`)
    .then((response) => {
      this.setState({
        yachts: response.data.yachts
      });
    })
    .catch();
  }

  render() {
    const yachts = this.state.yachts;
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      // lazyLoad: true,
      focusOnSelect: true,
      cssEase: 'ease',
      touchMove: true,
      waitForAnimate: true,
      centerPadding: '0',
      slidesToShow: 4,
      initialSlide: 2,
      autoplay: false,
      speed: 1000,
      responsive: [{
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
        {
          breakpoint: 1100,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 999,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            centerMode: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: false

          }
        }
      ]
    };

    return (
     <div className="ftr">

       {/* slider section */}
       <section
        id="yachts-carousel"
        className="blog_section section fix yachts-carousel">
         <div className="container-fluid" id="brd_sliderbtm">
           <div className="row">
             <div className="col-lg-4 col-md-4">
               <div className="heading">
                 <h1>Yachts for any destination {yachts.count}</h1>
                 <p>Accessible and fun at affordable prices</p>
               </div>
             </div>
             <div className="col-lg-8 col-md-8" id="footer_slider">
               <Slider {...settings}>
                 {yachts.map((yacht, index) => {
                   return [
                     <div key={index}>
                       <div className="inner">
                         <div className="ftr_slider-hover">
                           <SC.ResponsiveImg
                            backgroundUrl={yacht.main_image.search_thumb.url ? yacht.main_image.search_thumb.url : destination1}
                            className="img-responsive" />
                           <div className="slider_ftrdtl">
                             <div className="Quote_dtails">
                               <h2>{yacht.name}</h2>
                               <p>{yacht.length} m / {Math.round(yacht.length * 3.28)} ft
                                 | {yacht.type ? yacht.type.name : ''} | {yacht.build_year}</p>
                               <div className="quote_link-ftr">
                                                                    <span className="quote_pa">
                                                                    <a href={'/yachts/' + yacht.slug}
                                                                       className="getaqut">Discover More <img
                                                                     src={buttonarrow} className="quote_orange" /></a>
                                                                    </span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   ];
                 })}

               </Slider>

             </div>
           </div>
         </div>
         <div className="des-slider-vector">
           <img src={vectoelast} className="img-responsive" alt="Footer vector" />
         </div>
         <hr className="bottm_linee"></hr>
       </section>
     </div>
    );
  }
}

export default FooterSlider;
