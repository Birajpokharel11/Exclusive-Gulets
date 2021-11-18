import { connect } from 'react-redux';
import { createExperienceStart } from '@store/experiences/experiences.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  experience: state.experience
});

const mapDispatchToProps = (dispatch) => ({
  onCreateExperienceStart: (formData) =>
    dispatch(createExperienceStart(formData))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
