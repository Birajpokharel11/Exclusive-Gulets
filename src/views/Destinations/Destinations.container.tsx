import { connect } from 'react-redux';

import { fetchDestinationStart } from '@store/destination/destination.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  fetchDestinationStart: (page, amount_per_page) =>
    dispatch(fetchDestinationStart(page, amount_per_page))
});
const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
