import { connect } from 'react-redux';

import { fetchOfferStart } from '../../store/offer/offer.actions';
import { fetchRandomDestinationStart } from '../../store/destination/destination.actions';
import { fetchAdminYachtsStart } from '@store/yachts/yachts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  yacht: state.yacht,
  experience: state.experience,
  adminList: state.yacht.adminYachtsList
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOfferStart: () => dispatch(fetchOfferStart()),
  onFetchRandomDestinationStart: () => dispatch(fetchRandomDestinationStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
