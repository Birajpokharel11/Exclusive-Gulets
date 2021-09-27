import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import { FooterSlider, ScrollDown, Socials } from '../../components';

import wheel from '../../assets/images/Why_Charter/wheel.svg';
import whychart from '../../assets/images/Why_Charter/why-chart-mobile1.png';
import whychart2 from '../../assets/images/Why_Charter/why-chart-mobile2.png';
import whychart3 from '../../assets/images/Why_Charter/why_chart3.png';

export class WhyCharter extends React.Component {
  state = {
    general_content: {},
    charter_content: {},
    why_charter_images: {}
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get(`${process.env.REACT_APP_API_URL}/content/why-charter.json`)
      .then((response) => {
        this.setState({
          charter_content: response.data.why_charter,
          general_content: response.data.general,
          why_charter_images: response.data.why_charter_images
        });
        window.scrollTo(0, 0);
      })
      .catch();
  }

  render() {
    const why_charter_images = this.state.why_charter_images;
    const backgroundStyle1 = {
      backgroundImage: `url(${
        why_charter_images &&
        why_charter_images.image_1 &&
        why_charter_images.image_1.url
          ? why_charter_images.image_1.url
          : ''
      })`
    };

    const backgroundStyle2 = {
      backgroundImage: `url(${
        why_charter_images &&
        why_charter_images.image_2 &&
        why_charter_images.image_2.url
          ? why_charter_images.image_2.url
          : ''
      })`
    };

    const backgroundStyle3 = {
      backgroundImage: `url(${
        why_charter_images &&
        why_charter_images.image_3 &&
        why_charter_images.image_3.url
          ? why_charter_images.image_3.url
          : ''
      })`
    };

    const backgroundStyle4 = {
      backgroundImage: `url(${
        why_charter_images &&
        why_charter_images.image_4 &&
        why_charter_images.image_4.url
          ? why_charter_images.image_4.url
          : ''
      })`
    };

    return (
      <div className="open_menudiv">
        <Helmet>
          <title>Why Charter</title>
          <meta
            name="description"
            content="Over the years, we built our business based on trust and fellowship with our clients, not the commercial values that are prioritized in today's economic climate."
          />
        </Helmet>

        {/* Hero Section */}
        <div className="hero-slider section destination-hero">
          {this.props.createBreadcrumbs({
            theme: 'dark'
          })}

          <div
            className="hero-item HRO_SEC"
            id="whycharter"
            style={backgroundStyle1}
          >
            <div className="slider-dark-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="hero-content-wrap col">
                  <div className="hero-content destination-content">
                    <div className="row">
                      <div className="col-lg-7 col-md-6 col order-2 order-lg-1">
                        <div className="des-content-hero">
                          <p className="destina-first">WHY CHARTER?</p>
                          <h1>
                            {this.state.charter_content &&
                              this.state.charter_content.fields &&
                              this.state.charter_content.fields.heading}
                          </h1>
                          <p className="sec_destinatom_p">
                            {this.state.charter_content &&
                              this.state.charter_content.fields &&
                              this.state.charter_content.fields.subheading}
                          </p>
                        </div>
                      </div>
                      {/* <div className="col-lg-5 col-md-6 order-1 order-lg-2 video-margin">
                                                <div className="video-play destination-video">
                                                    <div id="video_container" className="Videoscreen">
                                                        <div className="flex" id="local_image_container">
                                                            <div className="vid htmlvid" id="playicon-charter"></div>
                                                            <p className="watch_videop">Watch our video
                                                                <br/>about charter</p>
                                                        </div>
                                                    </div>
                                                    <p className="mobile-video-title">Watch our video about charter</p>
                                                </div>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ScrollDown id="why-charter2" />
            <Socials />
          </div>
        </div>

        {/* second section */}
        <section
          id="why-charter2"
          className="section fix why-charter"
          style={backgroundStyle2}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 offset-lg-7 chart-content-div">
                <div className="charter-content">
                  <h1>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      this.state.charter_content.fields.charter_heading_1}
                  </h1>
                  <p>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      parse(
                        this.state.charter_content.fields.charter_description_1
                      )}
                    <br />
                    <br />
                    <span>
                      {this.state.charter_content &&
                        this.state.charter_content.fields &&
                        parse(
                          this.state.charter_content.fields
                            .charter_bottom_line_1
                        )}
                    </span>
                  </p>
                  <div className="vector-img">
                    <img src={wheel} className="img-responsive" alt="vector" />
                  </div>
                </div>
              </div>
              <div className="col d-block d-lg-none mobile-display no-padding">
                <img src={whychart} className="img-responsive" alt="whychart" />
              </div>
            </div>
          </div>
        </section>

        {/* Section third */}
        <section
          id="why-charter3"
          className="section fix why-charter"
          style={backgroundStyle3}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 offset-lg-7 chart-content-div2">
                <div className="charter-content">
                  <h1>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      this.state.charter_content.fields.charter_heading_2}
                  </h1>
                  <p>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      parse(
                        this.state.charter_content.fields.charter_description_2
                      )}
                    <br />
                    <br />
                    <span>
                      {this.state.charter_content &&
                        this.state.charter_content.fields &&
                        parse(
                          this.state.charter_content.fields
                            .charter_bottom_line_2
                        )}
                    </span>
                  </p>
                  <div className="vector-img">
                    <img src={wheel} className="img-responsive" alt="vector" />
                  </div>
                </div>
              </div>
              <div className="col d-block d-lg-none  mobile-display no-padding">
                <img
                  src={whychart2}
                  className="img-responsive"
                  alt="whychart2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Third section */}
        <section
          id="why-charter4"
          className="section fix why-charter"
          style={backgroundStyle4}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 offset-lg-7 chart-content-div">
                <div className="charter-content">
                  <h1>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      this.state.charter_content.fields.charter_heading_3}
                  </h1>
                  <p>
                    {this.state.charter_content &&
                      this.state.charter_content.fields &&
                      parse(
                        this.state.charter_content.fields.charter_description_3
                      )}
                    <br />
                    <br />
                    <span>
                      {this.state.charter_content &&
                        this.state.charter_content.fields &&
                        parse(
                          this.state.charter_content.fields
                            .charter_bottom_line_3
                        )}
                    </span>
                  </p>
                  <div className="vector-img">
                    <img src={wheel} className="img-responsive" alt="vector" />
                  </div>
                </div>
              </div>
              <div className="col d-block d-lg-none  mobile-display no-padding">
                <img
                  src={whychart3}
                  className="img-responsive"
                  alt="why-chart-mobile2"
                />
              </div>
            </div>
          </div>
        </section>

        <FooterSlider />
      </div>
    );
  }
}

export default WhyCharter;
