import { connect } from 'react-redux';

import { createGenericOfferStart } from '@store/offer/offer.actions';
import { fetchAdminYachtsStart } from '@store/yachts/yachts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth,
  yacht: state.yacht
});

const mapDispatchToProps = (dispatch) => ({
  onCreateGenericOfferStart: (formData) =>
    dispatch(createGenericOfferStart(formData)),
  onFetchYachtsStart: () => dispatch(fetchAdminYachtsStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
