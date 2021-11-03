/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import { signinStart, verifyBrokerStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSigninStart: (formData) => dispatch(signinStart(formData)),
  onVerifyBrokerStart: (formData) => dispatch(verifyBrokerStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
