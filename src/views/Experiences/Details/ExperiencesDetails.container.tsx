import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  experience: state.experience,
  destination: state.destination
});

const container = connect(mapStateToProps, null);

export default container;
