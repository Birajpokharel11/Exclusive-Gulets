import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  experience: state.experience
});

const container = connect(mapStateToProps, null);

export default container;
