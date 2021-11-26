import { connect } from 'react-redux';

import { filterYachtsStart } from '@store/yachts/yachts.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  yacht: state.yacht,
  experience: state.experience,
  adminList: state.yacht.adminYachtsList,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  onFilterYachtsStart: (formData) => dispatch(filterYachtsStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
