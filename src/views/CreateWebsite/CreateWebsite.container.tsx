/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import {
  validateUserEmailStart,
  signupBrokerStart
} from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onValidateUserEmailStart: (formData) =>
    dispatch(validateUserEmailStart(formData)),
  onSignupStart: (formData) => dispatch(signupBrokerStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
