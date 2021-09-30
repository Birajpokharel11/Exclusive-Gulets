import { connect } from 'react-redux';
import { fetchPostsStart } from '@store/posts/posts.actions';
const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsStart: (blogs) => dispatch(fetchPostsStart(blogs))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
