import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { Button } from '../../components';

import responseErrorMessage from '../../utils/responseErrorMessages';

import vector22 from '../../assets/images/icons/vector2.png';
import arrowLeft from '-!raw-loader!../../assets/images/icons/button back arrow.svg';
import { Helmet } from "react-helmet";
import { setError } from "../../actions/root";

const mapDispatchToProps = dispatch => bindActionCreators({
  setError
}, dispatch);

@compose(
  connect(null, mapDispatchToProps)
)

export class NoMatch extends React.Component {

  renderTitle() {

    const getErrorData = (statusCode) => {
      // console.log(responseErrorMessage, responseErrorMessage(statusCode));
      const { status, statusText } = responseErrorMessage(statusCode);
      return `${status} - ${statusText}`;
    };

    return this.props.error ?
      getErrorData(this.props.error.status) :
      getErrorData(404);
  }

  render() {
    return (
      <div className="open_menudiv">

        <Helmet>
          <meta name="description" content="LUXURY GULET & YACHT CHARTER EXPERTS" />
          <title>No match</title>
        </Helmet>

        <section id="date-quote-section" className="section fix date-quote-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="row">
                  <div className="date_startdiv">
                    <div className="date-from-to">
                    </div>
                  </div>
                  <div className="date_enddiv">
                    <div className="price-from-div">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col" id="mobile_butndate">
                <div className="row Date_buttons">
                  <div className="date_back-btn">
                    <div className="back-btn">

                    </div>
                  </div>
                  <div className="date_quote_btn">
                    <div className="get-quote-btn">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calendar" className="section fix calendar-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-6">
                <div className="calendar1">
                  <div className="load-moregems">
                    <div className="gems-content">
                      <p className="title">
                        {this.renderTitle()}
                      </p>
                      <p className="txt">The page you are looking is not available</p>
                      <Link to="/">
                        <Button
                          color="navy"
                          title="Back to Home"
                          svgIcon={arrowLeft}
                          svgPosition="left"
                        />
                      </Link>
                    </div>
                    <div className="vector-img">
                      <img id="last_destinatio_vector" src={vector22} className="img-responsive" alt="vector" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NoMatch;
