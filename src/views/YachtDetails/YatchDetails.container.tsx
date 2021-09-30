import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  siteCoordinator: state.siteCoordinator
});

const container = connect(mapStateToProps, null);

export default container;
