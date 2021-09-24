import { connect } from 'react-redux';

import { fetchDestinationStart } from '../../store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDestinationStart: (data) => dispatch(fetchDestinationStart(data))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
