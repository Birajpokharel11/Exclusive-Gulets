import { connect } from 'react-redux';
import { fetchExperiencesStart } from 'src/store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  experience: state.experience,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
