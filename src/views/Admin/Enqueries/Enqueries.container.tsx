import { connect } from 'react-redux';
import { fetchExperiencesStart } from '@store/experiences/experiences.actions';
import { fetchOfferStart } from '@store/offer/offer.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOfferStart: () => dispatch(fetchOfferStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
