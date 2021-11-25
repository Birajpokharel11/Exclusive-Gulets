import { connect } from 'react-redux';
import { fetchAdminYachtsStart } from '@store/yachts/yachts.actions';
import { fetchGenericOfferByIdStart } from '@store/offer/offer.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth,
  yacht: state.yacht,
  offer: state.offer
});

const mapDispatchToProps = (dispatch) => ({
  onFetchYachtsStart: () => dispatch(fetchAdminYachtsStart()),
  onFetchGenericOfferByIdStart: (id) => dispatch(fetchGenericOfferByIdStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
