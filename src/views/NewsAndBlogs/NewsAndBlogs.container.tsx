import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts
});

const container = connect(mapStateToProps, null);

export default container;
