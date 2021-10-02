import React from 'react';
import toast from 'toasted-notes';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import { withCookies } from 'react-cookie';

import { Button } from '../../components';

import { TITLE_OPTIONS } from '../../constants/general';

import backimg from '../../assets/images/Sign In/Back.png';
import heroimg from '../../assets/images/Sign In/Hero-bg.jpg';
import { Helmet } from "react-helmet";

@withCookies
export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      full_name: '',
      email: '',
      number: '',
      password: '',
      error: '',
      title: TITLE_OPTIONS[1].value,
      level_option: '',
      referrer: cookies.get('referrer') || '',
      // referrer: cookies.get('referrer') || null
    };
  }

  handleChangeLevelOption = (event) => {
    this.setState({ level_option: event.value });
  };

  handleChangeTitleOption = (event) => {
    this.setState({ title: event.value });
  };

  handleChangeFullName = (event) => {
    this.setState({ full_name: event.target.value });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios.post(`${process.env.REACT_APP_API_URL}/users.json`, this.state)
      .then((response) => {
        const data = response.data;
        if (data.status === true) {
          sessionStorage.setItem('user', JSON.stringify(response.data.user));
          toast.notify('Sign up Successfull');
          if (!sessionStorage.getItem('return-url')) {
            this.props.history.push('/');
          } else {
            this.props.history.push(sessionStorage.getItem('return-url'));
            sessionStorage.removeItem('return-url');
          }
        } else {
          this.setState({ error: data.message });
        }
      })
      .catch();
  };

  render() {
    const options = [
      { value: 'client', label: 'Client' },
      { value: 'owner', label: 'Yacht Owner / Manager' }
    ];

    return (
      <section id="signup-section" className="section fix signup-section">

        <Helmet>
          <title>Sign Up</title>
          <meta name="description" content="LUXURY GULET & YACHT CHARTER EXPERTS" />
        </Helmet>

        <div className="container-fluid">
          <Link className="back-img" to="/">
            <img src={backimg} alt="back arrow" />
          </Link>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12" id="signin_mob-padd">
              <div className="singin-pass-form-details">
                <h2 className="projetc_ttls">
                  <Link className="main_logohm" to="/">
                    EXCLUSIVE GULETS{' '}
                  </Link>
                </h2>
                <p className="title">Sign up</p>
                <h2 className="main-title">Manage your account and more...</h2>
                <p className="subline-text">
                  Sign up below to create your account.
               </p>

                {this.state.error === '' ? '' : <p className="title">{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <Select
                      type="text"
                      options={TITLE_OPTIONS}
                      onChange={(event) => {
                        this.handleChangeTitleOption(event);
                      }}
                      defaultValue={TITLE_OPTIONS[1]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputName">Full name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="InputName"
                      name="full_name"
                      aria-describedby="emailHelp"
                      value={this.state.full_name}
                      onChange={this.handleChangeFullName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">I am a:</label>
                    <Select
                      type="text"
                      options={options}
                      onChange={(event) => {
                        this.handleChangeLevelOption(event);
                      }}
                      defaultValue={options[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone_number">Phone number:</label>
                    <PhoneInput
                      international
                      id="phone_number"
                      value={this.state.number}
                      onChange={this.handleChangeNumber}
                      placeholder="Used for bookings only"
                      countryCallingCodeEditable={false}
                    />
                  </div>
                  <div className="form-group hidden">
                    <label htmlFor="Referrer">Referrer:</label>
                    <input
                      readOnly
                      id="Referrer"
                      type="text"
                      name="referrer"
                      value={this.state.referrer}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputEmail">Email:</label>
                    <input
                      required
                      id="InputEmail"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                      className="form-control"
                      placeholder="Your@email.com"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                      className="form-control"
                      placeholder="Enter 6 characters or more"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="forget-btn-div">
                    <Button
                      type="submit"
                      title="Sign up"
                    />
                  </div>
                  <p className="creat-acc-link">
                    <Link className="creat_link" to="/signin">
                      Already have an account? sign in.
                   </Link>
                  </p>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 no-padding"
              id="mobile_hidesignin"
            >
              <div className="rightside-image signin-right">
                <img
                  id="signimgs"
                  src={heroimg}
                  className="img-responsive sign_img"
                  alt="Hero BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
