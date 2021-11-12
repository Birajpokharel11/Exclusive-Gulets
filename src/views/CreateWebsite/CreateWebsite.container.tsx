/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import {
  validateUserEmailStart,
  signupBrokerStart
} from 'src/store/auth/auth.actions';
import { openAlert } from 'src/store/alert/alert.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onValidateUserEmailStart: (formData) =>
    dispatch(validateUserEmailStart(formData)),
  onSignupStart: (formData) => dispatch(signupBrokerStart(formData)),
  onOpenAlert: (message, severity) => dispatch(openAlert(message, severity))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
