import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  individual: state.posts.soleBlog,
  destination: state.destination
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchPostsStart: (page) => dispatch(fetchPostsStart(page))
// });

const container = connect(mapStateToProps, null);

export default container;
