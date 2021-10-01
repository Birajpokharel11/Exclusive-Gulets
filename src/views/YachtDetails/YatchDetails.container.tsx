import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  siteCoordinator: state.siteCoordinator,
  yatch: state.yacht,
  destination: state.destination
});

const container = connect(mapStateToProps, null);

export default container;
