import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { TITLE_OPTIONS } from "../../../constants/general"
import axios from 'axios'
import Button from '../../../components/Button/index'
// styles
import './index.scss';
// values from native css
const computedStyles = getComputedStyle(document.body);
const borderColor = computedStyles.getPropertyValue('--text-blue');
// custom styling for "Select(react-select)" plugins
const selectStyles = {
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: borderColor,
    '&:hover': {
      borderColor: borderColor,
    },
    boxShadow: state.isFocused && "0 0 0 0.2rem rgb(0 123 255 / 25%)",
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 400
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: computedStyles.getPropertyValue('--text-blue'),
    transition: 'all .2s ease',
    transform: state.isFocused && 'rotate(180deg)'
  })
};
const EnquireForm = ({ windowWidth, smallContainerWidth,
  // afterSend
}) => {
  const [formData, setFormData] = useState({
    title: null,
    country: null,
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [rowsCount, setRowsCount] = useState(3);
  const [countriesList, setCountriesList] = useState([])
  const requiredInputRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;callingCodes')
      .then(response => response.json())
      .then(countries => {
        setCountriesList(countries.filter((country => !!country.callingCodes[0])).map(country => ({
          value: `+${country.callingCodes}`,
          label: country.name
        })))
      })
      .catch(e => console.log(e))
    //input only letters
    document.getElementById("enquire-fullName").setAttribute("onkeypress", "return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32")
  }, [])
  useEffect(() => {
    windowWidth < 767 ? setRowsCount(7) : setRowsCount(3)
  }, [windowWidth])
  useEffect(() => {
    if (!formData.country) return
    updateFormDate(formData.country.value, 'phone')
    console.log("DD")
  }, [formData.country])
  useEffect(() => {
    if (!formData.title) return
    updateFormDate(formData.title.label, 'fullName')
  }, [formData.title])
  const updateFormDate = (value, key, event) => {
    if (key === "phone" && value !== "+") {
      if (isNaN(Number(value))) return
    }
    if (key === "fullName") {
      console.log(value === /^[A-Za-z]+$/)
    }
    setFormData({ ...formData, [key]: value });
  };
  const clearForm = () => setFormData({
    title: null,
    fullName: '',
    email: '',
    message: '',
    phone: '',
    country: null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      full_name: formData.fullName,
      email: formData.email,
      title: formData.title.value,
      mobile_number: formData.phone,
      comments: formData.message,
    };
    axios.post(`${process.env.REACT_APP_API_URL}/general_inquiries`, data)
    // .then(() => afterSend(true))
    // .catch(err => afterSend(false))
    clearForm();
  };
  const getPhoneMaxLength = () => {
    if (!formData.country) {
      return 10
    } else {
      return formData.country.value.length + 10
    }
  }
  return (
    <form className={`enquire-form`} onSubmit={handleSubmit}>
      <div className="row">
        <div className={smallContainerWidth ? "col-12" : "col-12 col-md-6 items-indent"}>
          <div className={smallContainerWidth ? "row relative_child_div" : "row mb-4 relative_child_div"}>
            {/* title select */}
            <div className={smallContainerWidth ? "col-12 mb_35 form-group" : "col-4 form-group mb-0"}>
              <label style={formData.title ? null : { display: 'none' }} className="m-0">Title</label>
              <Select
                type="text"
                isSearchable={false}
                options={TITLE_OPTIONS}
                value={formData.title}
                onChange={(e) => {
                  nameRef.current.focus()
                  updateFormDate({
                    value: e.value,
                    label: `${e.value}.`
                  }, 'title');
                  requiredInputRef.current.value = e.value;
                }}
                blurInputOnSelect={true}
                styles={selectStyles}
                components={{
                  IndicatorSeparator: () => null
                }}
                placeholder={`Title`}
                isRequired={true}
              />
              {
                // hack for making 'react-select' required
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.title}
                  style={{
                    opacity: 0,
                    width: "100%",
                    height: 0,
                    position: "absolute"
                  }}
                  ref={requiredInputRef}
                  required
                />
              }
            </div>
            {/* full name */}
            <div className={smallContainerWidth ? "col-12 mb_35" : "col-8 form-group m-0"}>
              <label style={formData.fullName ? null : { display: 'none' }} className="m-0">Full Name</label>
              <input type="text"
                onKeyPress={() => {
                  return
                }}
                ref={nameRef}
                className="form-control"
                id="enquire-fullName"
                aria-describedby="fullName"
                placeholder="Full name"
                autoComplete="off"
                required
                onChange={(e) => updateFormDate(e.target.value, 'fullName', e)}
                value={formData.fullName}
              />
            </div>
          </div>
          {/* email */}
          <div className={smallContainerWidth ? "form-group mb_35 position-relative" : "form-group position-relative mb-4"}>
            <label style={formData.email ? null : { display: 'none' }} className="m-0">Email</label>
            <input type="email"
              className="form-control"
              id="enquire-email"
              aria-describedby="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => updateFormDate(e.target.value, 'email')}
              value={formData.email}
              required
            />
          </div>
          <div className="row relative_child_div">
            {/* country select */}
            <div className={smallContainerWidth ? "col-12 mb_35 form-group" : "col-6 col-sm-4 form-group mb-0"}>
              <label style={formData.country ? null : { display: 'none' }} className="m-0">Country</label>
              <Select
                isSearchable={false}
                type="text"
                options={countriesList}
                value={formData.country}
                onChange={(e) => {
                  phoneRef.current.focus()
                  updateFormDate({
                    value: e.value,
                    label: e.label
                  }, 'country')
                }}
                blurInputOnSelect={true}
                styles={selectStyles}
                components={{
                  IndicatorSeparator: () => null
                }}
                placeholder={`Country`}
                isRequired={true}
              />
              {
                // hack for making 'react-select' required
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.country}
                  style={{
                    opacity: 0,
                    width: "100%",
                    height: 0,
                    position: "absolute"
                  }}
                  ref={requiredInputRef}
                  required
                />
              }
              {
                // hack for making 'react-select' required
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    opacity: 0,
                    width: "100%",
                    height: 0,
                    position: "absolute"
                  }}
                  ref={requiredInputRef}
                  required
                />
              }
            </div>
            {/* phone name */}
            <div className={smallContainerWidth ? "col-12 mb_35 position-relative" : "col-6 col-sm-8 form-group m-0 position-relative"}>
              <label style={formData.phone ? null : { display: 'none' }} className="m-0">Mobile Phone</label>
              <input
                type="tel"
                maxLength={getPhoneMaxLength()}
                ref={phoneRef}
                className="form-control"
                id="enquire-phone"
                aria-describedby="phone"
                placeholder="Mobile Phone"
                autoComplete="off"
                required
                onChange={(e) => updateFormDate(e.target.value, 'phone')}
                value={formData.phone}
              />
            </div>
          </div>
        </div>
        <div className={smallContainerWidth ? "col-12 mb_35 h_228" : "col-12 col-md-6 textarea-indent"}>
          <div className="form-group m-0 h-100 position-relative">
            <label style={formData.message ? null : { display: 'none' }} className="m-0">Your Comments</label>
            <textarea className="form-control h-100"
              id="enquire-comments"
              rows={rowsCount}
              placeholder="Comments"
              style={{ 'resize': 'none' }}
              value={formData.message}
              onChange={(e) => updateFormDate(e.target.value, 'message')}
            />
          </div>
        </div>
        <div style={{ marginTop: "5px" }} className="col-12 section-button-indent">
          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              title="Enquire"
              className="btn-theme-common btn-theme-filled--blue sm-wid mt-4"
              color="#fff"
              withButtonCustomStyle={false}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
EnquireForm.propTypes = {
  windowWidth: PropTypes.number,
  // smallContainerWidth: PropTypes.bool,
  // afterSend: PropTypes.func
};
EnquireForm.defaultProps = {
  windowWidth: window.innerWidth,
  // smallContainerWidth: false,
  // afterSend: f => f
};
export default EnquireForm;