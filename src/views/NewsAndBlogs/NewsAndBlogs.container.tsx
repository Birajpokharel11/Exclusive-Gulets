import { connect } from 'react-redux';

import { fetchDestinationStart } from '../../store/destination/destination.actions';
import { fetchPostsStart } from '../../store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDestinationStart: (data) => dispatch(fetchDestinationStart(data)),
  onFetchPostsStart: () => dispatch(fetchPostsStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
