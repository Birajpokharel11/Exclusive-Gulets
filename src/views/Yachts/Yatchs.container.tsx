import { connect } from 'react-redux';

import { fetchOfferStart } from '../../store/offer/offer.actions';
import { fetchRandomDestinationStart } from '../../store/destination/destination.actions';
import { fetchAdminYachtsStart } from '@store/yachts/yachts.actions';
import { fetchExperiencesStart } from 'src/store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  yacht: state.yacht,
  experience: state.experience,
  adminList: state.yacht.adminYachtsList,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOfferStart: () => dispatch(fetchOfferStart()),
  onFetchRandomDestinationStart: () => dispatch(fetchRandomDestinationStart()),
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
