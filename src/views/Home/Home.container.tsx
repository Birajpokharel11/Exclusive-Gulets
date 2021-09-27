import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  offer: state.offer,
  experience: state.experience
});

const container = connect(mapStateToProps, null);

export default container;
