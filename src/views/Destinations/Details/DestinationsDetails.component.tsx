import React from 'react';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { Banner, VideoModal, Button, InlineSvg, Breadcrumbs } from '../../../components';

import { selectData } from '../../../selectors/destinationDetailed';
import { selectContent } from '../../../selectors/root';
import { fetchCollection } from '../../../actions/destinationDetailed';

import vtr1 from '../../../assets/images/Blog_single/Vector2.svg';
import img11 from '../../../assets/images/yachts/image-11.png';
import vector2 from '../../../assets/images/Blog/blog-vector2.svg';
import subblog1 from '../../../assets/images/Blog_single/Corsario.jpg';

import locationPin from '-!raw-loader!../../../assets/images/svg/location_pin.svg';
import { fetchRequest, handleError, headers } from '../../../utils/fetchHelper';

import { Helmet } from "react-helmet"
import { getTitleContent } from 'utils/sharedFunctions';

const mapStateToProps = state => ({
  ...selectData(state),
  general_content: selectContent(state)
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCollection
}, dispatch);

@compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export class DestinationDetailed extends React.Component {

  state = {
    isOpen: false,
    activeSlide: 0,
    height: 0,
    meta_descriptions: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchData();

    fetchRequest('/content.json', {
      method: 'GET',
      headers
    })
      .then(res => {
        this.setState({ meta_descriptions: res.meta_descriptions.destinations })
      })
      .catch(handleError)
      .finally(() => {
        //dispatch(setLoading(false));
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0);
      this.fetchData();
    }
  }

  openModal = () => {
    if (this.props.featured_destination && this.props.featured_destination.video) {
      this.setState({ isOpen: true });
    }
  };

  handlePagination = () => {
    this.fetchData(this.props.next_page);
  };

  fetchData = (page = 0) => {
    const id = this.props.match.params.id;

    this.props.fetchCollection({ id, page });
  }
  getBannerHeight = (height) => {
    this.setState({ height })
  }
  getMetaDescriptionContent = (postId) => {
    if (!this.state.meta_descriptions) return
    for (let key in this.state.meta_descriptions) {
      if (key == postId) return (this.state.meta_descriptions[key]?.meta_description)
    }
  }

  render() {
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
      beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next === -1 ? 0 : next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    const {
      yachts,
      next_page,
      destinations,
      featured_destination,
      post
    } = this.props;

    return (
      <>

        <Helmet>
          <meta name="description" content={this.getMetaDescriptionContent(featured_destination.id)} />
          <title>{getTitleContent(this.props.location.pathname)}</title>
        </Helmet>

        <VideoModal
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
          channel="custom"
          videoId={featured_destination.video?.url || ''}
        />

        <Banner
          findOutSize={this.getBannerHeight}
          withSocial
          withScroll="fantasyland"
          bgImageUrl={featured_destination.featured_image?.featured?.url}
          bottomTitle={featured_destination.title}
          bottomSubTitle={featured_destination.description}
          createBreadcrumbs={this.props.createBreadcrumbs}
          breadcrumbName={featured_destination.title}
        />

        {/* Second section */}
        <section style={{ paddingTop: this.state.height + 40 + "px" }}
          id="fantasyland" className="section fix fantasyland">
          <div className="container">
            <div className="row">
              <div className="banner-bottom-description" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="fantasyland-content">
                  <h1>{featured_destination.heading}</h1>
                  <p>
                    {featured_destination.intro_content}
                  </p>
                  <p className="destina_p_secpara">
                    {featured_destination.intro_content_2}
                  </p>
                </div>
                <div className="post-author" id="author_destinatoin">
                  <div className="avatar">
                    <img src={img11} className="img-responsive" alt="avtar" />
                  </div>
                  <p className="desc">{featured_destination.testimonial}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="fantasyland-img" id="fantan_desktop">
                  <img
                    src={featured_destination?.side_image?.side_image?.url}
                    alt="fantsyland"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="background-vector offer-news-vector" id="destination_vctr1">
            <img src={vector2} className="img-responsive" alt="Background vector art" />
          </div>
        </section>

        {/* Slider section */}
        <section id="destination-carousel" className="slider_desitnation">
          <div className="container-fluid">
            <div className="row desktop-slider">
              {
                !!featured_destination.attachments?.length && (
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
                        ))
                        }
                      </Slider>
                    </div>
                    <h4 className="desti_pagin desti_pagination">
                      {
                        this.state.activeSlide < 0 ? 1 : this.state.activeSlide + 1} / {featured_destination.attachments.length
                      }
                    </h4>
                  </div>
                )
              }
            </div>
          </div>
        </section>

        {/* Third section */}
        <section
          id="destinationpage-content"
          className="section fix destinationpage-content"
        >
          <div className="container">
            <div className="row mtp">
              <div className="col-lg-12 col-md-12 padding-lr">
                <p className="main-sec_destionp">
                  {featured_destination.content && parse(featured_destination.content)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {
          !!yachts.length && (
            <section
              className="section fix other-gems singl_bloggemg wow slideInUp"
              data-wow-duration="1s"
            >
              <div className="container">
                <div className="other-gems-cont-left">
                  <div className="heading-destinations">
                    <h1>EXCLUSIVE GULETS</h1>
                    <p>A Selection of Yachts</p>
                  </div>
                </div>
                <div className="row">
                  {
                    yachts.map((yacht) => (
                      <div className="col-lg-6 col-md-6 col-sm-12" key={yacht.slug}>
                        <Link to={`/yachts/${yacht.slug}`}>
                          <div className="gems">
                            <div className="gems-img">
                              <img
                                src={yacht && yacht.main_image.slider.url ? yacht.main_image.slider.url : subblog1}
                                className="img-responsive" alt="subblog" />
                            </div>
                            <div className="gems-content">
                              <p className="title">{yacht && yacht.name}</p>
                              <div className="location">
                                <div className="icon">
                                  <InlineSvg
                                    svg={locationPin}
                                    fill="#f7b654"
                                    className="location-pin"
                                  />
                                </div>
                                <p>{yacht && yacht.sailing_countries && yacht.sailing_countries.map(e => e.name).join(', ')}</p>
                              </div>
                              <p
                                className="txt">{yacht && yacht.about && parse(yacht.about.substr(0, 200) + '...')}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                  {
                    !!next_page && (
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="load-moregems">
                          <div className="gems-content" style={{ textAlign: 'center' }}>
                            <p className="title">Load more
                           <br />luxury Gulets</p>
                            <p className="txt">Go on... be curious</p>
                            <Button
                              title="More"
                              onClick={this.handlePagination}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="background-vector other-grms-vector">
                <img src={vtr1} className="img-responsive" alt="Blog vector4" />
              </div>
            </section>
          )
        }

        <section
          className="section fix other-gems destina_gems"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="other-gems-cont-left">
              <div className="heading-destinations">
                <h1>DESTINATIONS</h1>
                <p>Discover secret locations around the world</p>
              </div>
            </div>
            <div className="row">
              {
                destinations.filter(d => d.title.toLowerCase() !== 'destinations')?.map((destination) => (
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Link to={`/destinations/${destination.slug}`} key={destination.slug}>
                      <div className="gems">
                        <div className="gems-img">
                          <img
                            src={destination.featured_image.url}
                            srcSet={`${destination.featured_image.url} 300w, ${destination.featured_image.url} 768w, ${destination.featured_image.url} 1280w`}
                            className="img-responsive" alt="caribbean"
                          />
                        </div>
                        <div className="gems-content" style={{ textAlign: 'center' }}>
                          <p className="title">{destination.title}</p>
                          <p className="txt">{destination.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }
              {
                !!next_page && (
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="load-moregems">
                      <div className="gems-content" style={{ textAlign: 'center' }}>
                        <p className="title">Discover more
                        <br />Destinations</p>
                        <p className="txt">Go on... be curious</p>
                        <Button
                          title="More"
                          onClick={this.handlePagination}
                        />
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      </>
    );
  }

}

export default DestinationDetailed;
