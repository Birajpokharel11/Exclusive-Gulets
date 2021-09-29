import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import backimg from '../../assets/images/Sign In/Back.png';
import heroimg from '../../assets/images/Sign In/Hero-bg.jpg';
import { Helmet } from "react-helmet"


export class ForgotPassword extends React.Component {
  render() {
    return (
      <section id="forget-pass" className="section fix forget-pass">

        <Helmet>
          <meta name="description" content="LUXURY GULET & YACHT CHARTER EXPERTS" />
          <title>Forgot Password</title>
        </Helmet>

        <div className="container-fluid">
          <Link className="back-img" to="/signin">
            <img src={backimg} alt="back" />
          </Link>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12" id="signin_mob-padd">
              <div className="singin-pass-form-details">
                <h2 className="projetc_ttls"><Link className="main_logohm" to="/">EXCLUSIVE GULETS </Link></h2>
                <p className="title">Forgot Password</p>
                <h2 className="main-title">Reset your password here</h2>
                <p className="subline-text">Enter Details below to get reset link</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="InputEmail1">Email:</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                      placeholder="your@email.com" />
                  </div>
                  <div className="forget-btn-div">
                    <Button
                      title="Reset Password"
                    />
                  </div>
                  <p className="creat-acc-link"><Link className="creat_link" to="/signin">Oh Wait I remeber it!</Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 no-padding" id="mobile_hidesignin">
              <div className="rightside-image signin-right">
                <img id="signimgs" src={heroimg} className="img-responsive sign_img" alt="Hero BG" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
