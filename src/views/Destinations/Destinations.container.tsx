import { connect } from 'react-redux';

import { fetchDestinationStart } from '@store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  fetchDestinationStart: (page) => dispatch(fetchDestinationStart(page))
});
const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
