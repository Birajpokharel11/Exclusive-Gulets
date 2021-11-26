import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  alert: state.alert,
  siteCoordinator: state.siteCoordinator
});

const container = connect(mapStateToProps, null);

export default container;
