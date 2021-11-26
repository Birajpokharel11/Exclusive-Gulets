import { connect } from 'react-redux';

import { filterYachtStart } from '@/store/search/search.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  yacht: state.yacht,
  experience: state.experience,
  adminList: state.yacht.adminYachtsList,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  onFilterYachtStart: (formData) => dispatch(filterYachtStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
