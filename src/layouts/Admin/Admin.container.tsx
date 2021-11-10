/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import {
  signinStart,
  verifyBrokerStart,
  signoutStart
} from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onVerifyBrokerStart: (formData) => dispatch(verifyBrokerStart(formData)),
  onSignoutStart: (token) => dispatch(signoutStart(token))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
