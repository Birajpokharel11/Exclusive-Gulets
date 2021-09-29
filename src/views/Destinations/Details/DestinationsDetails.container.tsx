import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const container = connect(mapStateToProps, null);

export default container;
