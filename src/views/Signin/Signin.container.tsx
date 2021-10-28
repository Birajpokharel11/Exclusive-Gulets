/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import { signinStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
  tenant: state.tenant,
  invitation: state.invitation
});

const mapDispatchToProps = (dispatch) => ({
  onSigninStart: (formData) => dispatch(signinStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
