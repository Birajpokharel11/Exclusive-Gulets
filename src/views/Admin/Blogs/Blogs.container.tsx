import { connect } from 'react-redux';
import { createPostStart, fetchPostsStart } from '@store/posts/posts.actions';
const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePostStart: (formData) => dispatch(createPostStart(formData)),
  onFetchPostsStart: (id) => dispatch(fetchPostsStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
