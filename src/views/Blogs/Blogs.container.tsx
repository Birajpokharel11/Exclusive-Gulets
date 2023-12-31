import { connect } from 'react-redux';
import { fetchPostsStart } from '@store/posts/posts.actions';
const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStart: (id) => dispatch(fetchPostsStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
