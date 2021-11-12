/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import { signinStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSigninStart: (formData) => dispatch(signinStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
