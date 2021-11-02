/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import {
  validateUserEmailStart,
  signupStart
} from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onValidateUserEmailStart: (formData) =>
    dispatch(validateUserEmailStart(formData)),
  onSignupStart: (formData) => dispatch(signupStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
