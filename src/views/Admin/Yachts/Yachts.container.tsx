/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';

import { signupStart } from 'src/store/auth/auth.actions';
import {
  addPictureStart,
  createYachtStart,
  fetchAdminYachtsStart
} from 'src/store/yachts/yachts.actions';

const mapStateToProps = (state) => ({
  auth: state.auth,
  tenant: state.tenant,
  invitation: state.invitation,
  yacht: state.yacht
});

const mapDispatchToProps = (dispatch) => ({
  onSignupStart: (formData) => dispatch(signupStart(formData)),
  onCreateYachtStart: (formData) => dispatch(createYachtStart(formData)),
  onFetchYachtsStart: () => dispatch(fetchAdminYachtsStart()),
  onPicAddStart: () => dispatch(addPictureStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
