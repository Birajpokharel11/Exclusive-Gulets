import { connect } from 'react-redux';

import { fetchOfferStart } from '../../store/offer/offer.actions';
import { fetchRandomDestinationStart } from '../../store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOfferStart: () => dispatch(fetchOfferStart()),
  onFetchRandomDestinationStart: () => dispatch(fetchRandomDestinationStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
