import { connect } from 'react-redux';

import { fetchOfferStart } from '../../store/offer/offer.actions';
import { fetchRandomDestinationStart } from '../../store/destination/destination.actions';
import { fetchPostsStart } from '../../store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOfferStart: () => dispatch(fetchOfferStart()),
  onFetchRandomDestinationStart: () => dispatch(fetchRandomDestinationStart()),
  onFetchPostsStart: () => dispatch(fetchPostsStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
