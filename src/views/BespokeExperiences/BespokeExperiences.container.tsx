import { connect } from 'react-redux';

import { fetchDestinationStart } from '../../store/destination/destination.actions';
import { fetchExperiencesStart } from '../../store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination
});

const mapDispatchToProps = (dispatch) => ({
  onFetchDestinationStart: (data) => dispatch(fetchDestinationStart(data)),
  onFetchExperiencesStart: () => dispatch(fetchExperiencesStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
