import { connect } from 'react-redux';
import { fetchPostsByIdStart, editPostStart } from '@store/posts/posts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPostsByIdStart: (id) => dispatch(fetchPostsByIdStart(id)),
  onEditPostStart: (formData) => dispatch(editPostStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
