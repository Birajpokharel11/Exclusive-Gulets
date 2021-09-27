import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

import { Helmet } from "react-helmet";

export class Terms extends React.Component {
  state = {
    content: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    axios.get(`${process.env.REACT_APP_API_URL}/content/terms.json`)
      .then((response) => {
        this.setState({ content: response.data.terms.fields.content });
        window.scrollTo(0, 0);
      })
      .catch();
  }

  render() {

    return (
      <div className="open_menudiv">

        <Helmet>
          <title>Terms</title>
          <meta name="description" content="Your use of the Exclusive Gulets website is governed by these terms and conditions which should be read in conjunction with details provided on the website about how it operates and the services it makes available." />
        </Helmet>

        <div className="hero-slider section search-hero" id="search_page">
          <div className="hero-item" id="generic-header">
            <div className="slider-dark-overlay" />
            <div className="container">
              <div className="row">
                <div className="hero-content-wrap col">
                  <div className="hero-content searchpage-content">
                    <div className="slide-txt">
                      <p id="serrch_fline" className="first-line text-center"></p>
                      <h1 className="second-line text-center">Terms and Conditions</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="calendar1">
                <div className="gems-content">
                  <p>{parse(this.state.content)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Terms;
