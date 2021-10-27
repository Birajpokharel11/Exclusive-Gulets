import { connect } from 'react-redux';

import { closeAlert } from '@store/alert/alert.actions';

const mapStateToProps = (state) => ({
  alert: state.alert
});
const mapDispatchToProps = (dispatch) => ({
  onCloseAlert: () => dispatch(closeAlert())
});
const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
