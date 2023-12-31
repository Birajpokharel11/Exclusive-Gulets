import { connect } from 'react-redux';

import { signoutStart } from '@store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSignoutStart: (token) => dispatch(signoutStart(token))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
