/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import { signupStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
  tenant: state.tenant,
  invitation: state.invitation
});

const mapDispatchToProps = (dispatch) => ({
  onSignupStart: (formData) => dispatch(signupStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
